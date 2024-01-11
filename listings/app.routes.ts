export const routes: Routes = [
    {
      path: 'user',
      canActivate: [isUserLogged],
      children: [
        {
          path: 'account',
          component: UserAccountComponent,
          title: 'Account',
        },
      ]
    },
    {
      path: 'login',
      component: UserLoginComponent,
      title: 'Log In',
    },
    {
      path: 'product',
      children: [
        {
          path: ':productId',
          component: ProductComponent,
          title: 'Product',
        },
      ]
    },
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home Page'
    },
    {
      path: '',
      component: HomeComponent,
      title: 'Home Page'
    },
    {
      path: '**',
      component: PageNotFoundComponent,
      title: 'Page not found'
    },
  ];