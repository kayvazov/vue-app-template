export default ({ store, router }) => async (to, from, next) => {
  const matched = router.getMatchedComponents(to);
  const prevMatched = router.getMatchedComponents(from);
  let diffed = false;

  const activated = matched.filter((c, i) => {
    const isActivated = diffed || (diffed = (prevMatched[i] !== c));
    return isActivated;
  });

  if (!activated.length) {
    // push last match for loading asyncData
    activated.push(matched[matched.length - 1]);
  }

  const asyncDataHooks = [router.app.$options, ...activated]
    .filter((_) => _)
    .map((c) => c.asyncData)
    .filter((_) => _);

  if (!asyncDataHooks.length) {
    next();
    return;
  }

  try {
    const hooks = asyncDataHooks
      .map((hook) => hook({ store, router, route: to }))
      .filter((_) => _);

    await Promise.all(hooks);
    next();
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Error while asyncData:');
      console.error(error);
    }

    next();
  }
};
