import { Component } from "@angular/core";
import {HttpService} from "../../../providers/HttpService";
import {Utils} from "../../../providers/Utils";

declare var $: any;
declare var layer: any;

@Component({
    selector   : 'page-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss']
})
export class HomePage {

    showTime:any = new Date();
    constructor(private httpService:HttpService) {
        this.showTime = new Date();
    }

    ngOnInit(){
        
    }
}
