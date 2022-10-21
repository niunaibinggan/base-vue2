export default router => {
  router.beforeEach(async (to, from, next) => { 
    console.log('路由守卫')
    next()
  })
}
