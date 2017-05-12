import { Component } from "@angular/core";
import { Router } from '@angular/router';

import {HttpService} from "../../../providers/HttpService";
import {Utils} from "../../../providers/Utils";

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
    picCode:string;//验证码
    imgCode:string;//图片验证码
    key:string;//验证码对应的key
    constructor(private router:Router,private httpService:HttpService) {
        this.loadValiCode();//获取验证码图片
    }

    ngOnInit(){
        $("body").addClass("loginBody");
    }


    /**
    * 用户登录
    */
    loginIn(){
        if(this.validator()){
            this.router.navigate(['common/main']);
        }
    }

    /*
    * 获取图片验证码
    */
    loadValiCode(){
        this.httpService.httpGet({
            url:'/api/common/forgetLoginPic',
            data:[]
        }).subscribe((data:any)=>{
            if(data.code === 200){
                this.imgCode = data.result.picCode;
                this.key = data.result.key;
            }
        });
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
