/**
 * Created by qsy on 2017-05-12.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Observable,Observer} from "rxjs";
import {Utils} from "./Utils";
import {HttpInterceptHandle} from "./HttpInterceptHandle";

@Injectable()
export class HttpService {

    constructor(public http: Http,public httpHandle: HttpInterceptHandle) {
    }

    /**
    * http get 请求
    */
    public httpGet(options?: any){
        let url = Utils.APP_SERVE_URL + options.url;
        let reqData = options.data;
        this.httpHandle.httpBefore(url, reqData);
        return Observable.create((observer: Observer<any>) => {
            this.http.get(url, reqData).map(res => res.json()).toPromise().then(result=>{
                this.httpHandle.httpSuccess(url, reqData);
                observer.next(result);
            },err=>{
                this.httpHandle.httpError(url, reqData, err.status);
                observer.error(err);
            });
        });
    }

    /**
    * http post 请求
    */
    public httpPost(options?: any){
        let url = Utils.APP_SERVE_URL + options.url;
        let reqData = options.data;
        this.httpHandle.httpBefore(url, reqData);
        return Observable.create((observer: Observer<any>) => {
            this.http.post(url, reqData).map(res => res.json()).toPromise().then(result=>{
                this.httpHandle.httpSuccess(url, reqData);
                observer.next(result);
            },err=>{
                this.httpHandle.httpError(url, reqData, err.status);
                observer.error(err);
            });
        });
    }



}
