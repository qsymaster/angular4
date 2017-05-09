import { LoginPage } from './login/login';
import { MainPage } from './main/main';
import { Routes } from "@angular/router";
export const CommonRoutes: Routes = [ // Routes类型的数组
    {
        path     : '',
        component: LoginPage
    },
    {
        path     : 'common/main',
        component: MainPage
    }
];
