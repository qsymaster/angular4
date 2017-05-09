import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { CommonModule } from '../pages/common/common.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      FormsModule,
      CommonModule,
      RouterModule.forRoot(AppRoutes,{useHash: false}),
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
