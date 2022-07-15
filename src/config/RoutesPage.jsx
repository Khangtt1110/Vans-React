import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout'
import HomeLayout from '~/layouts/HomeLayout/HomeLayout'
import Detail from '~/pages/detail/Detail'
import Home from '~/pages/home/Home'

const RoutesPage = [
  {
    path: '/', 
    component: Home, 
    layout: HomeLayout
  },
  {
    path: '/product/:productId', 
    component: Detail, 
    layout: DefaultLayout
  },
  {
    path: '*', component: Home, layout: HomeLayout
  }
]

export { RoutesPage }