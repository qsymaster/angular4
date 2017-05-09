import { Component } from "@angular/core";
import { Router } from '@angular/router';

declare var $: any;
declare var layer: any;

@Component({
    selector   : 'page-login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class LoginPage {

    loginName:string;//登录名
    password:string;//密码
    code:string;//验证码

    constructor(private router:Router) {

    }

    loginIn(){
        if(this.validator()){
            this.router.navigate(['common/main']);
        }
    }

    //验证表单数据
    validator(){
        if(!this.loginName || this.loginName==''){
            layer.tips('登录名不能为空', '#loginName',{tips: 1});
            return false;
        }
        if(!/^[a-zA-z]\w{3,15}$/.test(this.loginName)){
            layer.tips('登录名必须由数字和字母组成，长度必须在4~16位', '#loginName',{tips: 1});
            return false;
        }
        return true;
    }
}
