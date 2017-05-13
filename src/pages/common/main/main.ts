import { Component } from "@angular/core";
import { Router } from '@angular/router';
import {Utils} from "../../../providers/Utils";

declare var $: any;
declare var layer: any;
let _router: any;
@Component({
    selector   : 'page-main',
    templateUrl: './main.html',
    styleUrls: ['./main.scss']
})
export class MainPage {
    linkCls:string='';
    userImg:string = "/assets/images/avatar.png";
    userName:string = '';
    constructor(private router:Router) {
        _router = router;
        //获取用户信息
        let userInfo:any = Utils.getObject("userInfo");

        if(userInfo){
            console.log("============="+JSON.stringify(userInfo));
            this.userImg = userInfo.headImgUrl;
            this.userName = userInfo.nickName;
        }

    }

    ngOnInit(){
        $("body").removeClass("loginBody");
        $("#menu").metisMenu();
    }

    displayMenu(){
        if(this.linkCls==='open'){
            this.linkCls = '';
            $("body").removeClass("big-page");
        } else {
            this.linkCls = 'open';
            $("body").addClass("big-page");
        }
    }

    loginOut(){
        layer.confirm('你确定要退出系统？', {
            btn: ['确定','取消'] //按钮
        }, function(idx:number){
            _router.navigate(['common/login']); //确认
            layer.close(idx);
        }, function(){
            //取消
        });
    }
}
