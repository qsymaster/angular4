import { Routes } from "@angular/router";

import { HomePage } from '../desktop/home/home';
import { GoodsPage } from '../desktop/goods/goods';
import { OrderPage } from '../desktop/order/order';

export const MainRoutes: Routes = [ // Routes类型的数组
    {
        path     : '',
        component: HomePage
    },
    {
        path     : 'desktop/home',//首页
        component: HomePage
    },{
        path     : 'desktop/goods',//商品管理
        component: GoodsPage
    },{
        path     : 'desktop/order',//订单管理
        component: OrderPage
    },{
        path     : '**',
        component: HomePage
    },
];
