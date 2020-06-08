
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'Login', component: () => import('pages/Login.vue') },
      { path: 'Cadastrar', component: () => import('pages/Cadastrar.vue') },
      { path: 'EsqueceuSenha', component: () => import('pages/EsqueceuSenha.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
