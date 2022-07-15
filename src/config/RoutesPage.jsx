import DefaultLayout from '~/layouts/DefaultLayout/DefaultLayout'
import HomeLayout from '~/layouts/HomeLayout/HomeLayout'
import Detail from '~/pages/detail/Detail'
import Home from '~/pages/home/Home'
import ProductList from '~/pages/product-list/ProductList'

const RoutesPage = [
  {
    path: '/',
    component: Home,
    layout: HomeLayout
  },
  {
    path: '/products/:productId',
    component: Detail,
    layout: DefaultLayout
  },
  {
    path: '/products',
    component: ProductList,
    layout: DefaultLayout
  },
  {
    path: '*',
    component: Home,
    layout: HomeLayout
  }
]

export { RoutesPage }