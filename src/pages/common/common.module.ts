import { CommonRoutes } from './common.routes';
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { LoginPage } from './login/login';
import { MainPage } from './main/main';

@NgModule({
    declarations: [
        LoginPage,
        MainPage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(CommonRoutes,{useHash: false}),
    ]
})
export class CommonModule { }
