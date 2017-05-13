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
        $("#loginName").focus();
    }


    /**
    * 用户登录
    */
    loginIn(){
        if(this.validator()){
            this.httpService.post({
                url:'/api/user/login/loginIn',
                data:{
                    loginName:this.loginName,
                    password:this.password,
                    key:this.key,
                    picCode:this.picCode,
                    registrationId:'asdfasdfasdfsdfasd'
                }
            }).subscribe((data:any)=>{
                if(data.code===200){
                    sessionStorage.setItem('key',data.result.token);
                    Utils.setObject('userInfo',data.result);
                    layer.msg("用户登录成功",{
                        icon: '1',
                        time: 2000
                    },()=>this.router.navigate(['common/main']));
                }else if(data.code===-1){
                    Utils.show(data.msg);
                }else{
                    Utils.show("登录失败，用户名或密码输入有误");
                }
            });
        }
    }

    /*
    * 获取图片验证码
    */
    loadValiCode(){
        this.httpService.get({
            url:'/api/common/forgetLoginPic',
            data:[]
        }).subscribe((data:any)=>{
            if(data.code === 200){
                this.imgCode = data.result.picCode;
                this.key = data.result.key;
            }
        });
    }

    /**
    * 清空表单数据
    */
    clearVal(){
        this.loginName = '';
        this.password = '';
        this.picCode = '';
        $("#loginName").focus();
    }

    //验证表单数据
    validator(){
        if(Utils.isEmpty(this.loginName)){
            layer.tips('登录名不能为空', '#loginName',{tips: 1});
            $("#loginName").focus();
            return false;
        }
        if(Utils.isEmpty(this.password)){
            layer.tips('密码不能为空', '#password',{tips: 1});
            $("#password").focus();
            return false;
        }
        if(Utils.isEmpty(this.picCode)){
            layer.tips('验证码不能为空', '#picCode',{tips: 1});
            $("#picCode").focus();
            return false;
        }
        return true;
    }
}
