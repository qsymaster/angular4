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

  public postFormData(url: string, paramMap?: any) {
    url = Utils.APP_SERVE_URL + url;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8'
    });
    return this.http.post(url, HttpService.buildURLSearchParams(paramMap).toString(), new RequestOptions({headers: headers}));
  }

    public get(url: string, paramMap?: any) {
        url = Utils.APP_SERVE_URL + url;
        this.httpHandle.httpBefore(url, paramMap);
        return Observable.create((observer: Observer<any>) => {
            this.http.get(url, paramMap).subscribe(res => {
                this.httpHandle.httpSuccess(url, paramMap);
                observer.next(res);
            }, err => {
                this.httpHandle.httpError(url, paramMap, err.status);
                observer.error(err);
            });
        });
        // url = Utils.APP_SERVE_URL + url;
        // return this.http.get(url, {search: HttpService.buildURLSearchParams(paramMap)}).map(res => res.json()).toPromise();
    }

  // 默认Content-Type为application/json;
  public post(url: string, body: any = null) {
    url = Utils.APP_SERVE_URL + url;
    return this.http.post(url, body).map(res => res.json()).toPromise();
  }

  public put(url: string, body: any = null, options?: RequestOptionsArgs) {
    url = Utils.APP_SERVE_URL + url;
    return this.http.put(url, body, options).map(res => res.json()).toPromise();
  }

  public delete(url: string, paramMap?: any) {
    url = Utils.APP_SERVE_URL + url;
    return this.http.delete(url, {search: HttpService.buildURLSearchParams(paramMap)}).map(res => res.json()).toPromise();
  }

  public patch(url: string, body: any = null, options?: RequestOptionsArgs) {
    url = Utils.APP_SERVE_URL + url;
    return this.http.patch(url, body, options).map(res => res.json()).toPromise();
  }

  public head(url: string, paramMap?: any) {
    url = Utils.APP_SERVE_URL + url;
    return this.http.head(url, {search: HttpService.buildURLSearchParams(paramMap)}).map(res => res.json()).toPromise();
  }

  public options(url: string, paramMap?: any) {
    url = Utils.APP_SERVE_URL + url;
    return this.http.options(url, {search: HttpService.buildURLSearchParams(paramMap)}).map(res => res.json()).toPromise();
  }

  public static buildURLSearchParams(paramMap?:any): URLSearchParams {
    let params = new URLSearchParams();
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val,'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }


}
