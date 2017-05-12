/**
 * Created by qsy on 2017-05-12.
 */
import {Injectable} from '@angular/core';
import {Utils} from "./Utils";
import {RequestOptionsArgs} from '@angular/http';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class HttpInterceptHandle {

    constructor() {
    }
    /**
    *  请求前
    */
    httpBefore(url: string, options ?: any){
        Utils.showLoading();
        console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
    }

    /**
    *  请求成功
    */
    httpSuccess(url: string, options ?: any){
        Utils.hideLoading();
        console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options);
    }

    /**
    *  请求异常
    */
    httpError(url: string, options ?: any, status? :number){
        Utils.hideLoading();
        console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options);
        if (status === 0) {
            Utils.show('请求响应错误，请检查网络');
        } else if (status === 404) {
            Utils.show('请求链接不存在，请联系管理员');
        } else if (status === 500) {
            Utils.show('服务器出错，请稍后再试');
        } else {
            Utils.show('未知错误，请检查网络');
        }
    }

}
