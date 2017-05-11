import { CommonRoutes } from './common.routes';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
//通用
import { LoginPage } from './login/login';
import { MainPage } from './main/main';
//我的桌面
import { HomePage } from '../desktop/home/home';
import { GoodsPage } from '../desktop/goods/goods';
import { OrderPage } from '../desktop/order/order';
//系统管理

@NgModule({
    declarations: [
        LoginPage,
        MainPage,
        HomePage,
        GoodsPage,
        OrderPage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(CommonRoutes,{useHash: false}),
    ]
})
export class CommonModule { }
