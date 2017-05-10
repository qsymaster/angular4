import { Component } from "@angular/core";
import { Router } from '@angular/router';

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
    constructor(private router:Router) {
        _router = router;
    }

    ngOnInit(){
        $("body").removeClass("loginBody");
        $("#myMenu").metisMenu();
        // $('#leftPanel').slimScroll({height:'auto',width:'350px',color:'#656565',railOpacity:0.9,wheelStep:10});
        // $('#rightpanel').slimScroll({height:'auto',color:'#656565',railOpacity:0.9,wheelStep:10,alwaysVisible: true});
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
