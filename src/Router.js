import ProductView from './Pages/Product/ProductView.js'
import AdminHome from './Pages/Admin/AdminHome.js'

const ROUTES = [
    {
      path: "/home/ProductView",
      name: "Product",
      component: ProductView,
      exact: true
    },
    {
      path: "/Admin",
      name: "Admin",
      component: AdminHome,
      exact: true
    }
]