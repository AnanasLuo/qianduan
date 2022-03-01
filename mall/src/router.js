import Vue from "vue"
import VueRouter from "vue-router";
import Home from './pages/home';
import Cart from './pages/cart';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail';
import Order from './pages/order';
import OrderConfirm from './pages/orderConfirm';
import OrderList from './pages/orderList';
import OrderPay from './pages/orderPay';
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/',
                name: 'index',
                component: Index,
            },
            {
                path: '/product/:id',
                name: 'product',
                component: Product,
            },
            {
                path: '/detail/:id',
                name: 'detail',
                component: Detail,
            },
        ]
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
            {
                path: '/confirm',
                name: 'orderConfirm',
                component: OrderConfirm
            },
            {
                path: '/list',
                name: 'orderList',
                component: OrderList
            },
            {
                path: '/pay',
                name: 'orderPay',
                component: OrderPay
            },
        ]
    },
]

const router= new VueRouter({routes})

export default router;