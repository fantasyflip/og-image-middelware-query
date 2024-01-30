export default defineNuxtRouteMiddleware((to, from) => {
  const filterPages = ['portfolio-highlights', 'portfolio-highlights2'];

  if (filterPages.includes(to.name!.toString()) && !to.query.filter) {
    console.log('Middleware attaching query');
    return navigateTo({
      path: to.path,
      query: {
        filter: to.query.filter || -1,
      },
    });
  }
});
