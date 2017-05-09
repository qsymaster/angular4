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

    constructor(private router:Router) {
        _router = router;
    }

    ngOnInit(){
        $('#leftPanel').slimScroll({height:'auto',color:'#656565',railOpacity:0.9,wheelStep:10,alwaysVisible: true});
        $('#rightpanel').slimScroll({height:'auto',color:'#656565',railOpacity:0.9,wheelStep:10,alwaysVisible: true});
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
