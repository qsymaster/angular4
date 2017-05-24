import { Component } from "@angular/core";

declare var $: any;
declare var layer: any;

@Component({
    selector   : 'page-goods',
    templateUrl: './goods.html',
    styleUrls: ['./goods.scss']
})
export class GoodsPage {

    lis:any=[{
        gid:'00001',
        gname:'小米6',
        price:2500,
        truePrice:2300,
        pic:'00001.img',
        tname:'数码',
        dis:'为发骚而生'
    },{
        gid:'00002',
        gname:'小米6',
        price:2500,
        truePrice:2300,
        pic:'00001.img',
        tname:'数码',
        dis:'为发骚而生'
    },{
        gid:'00003',
        gname:'小米6',
        price:2500,
        truePrice:2300,
        pic:'00001.img',
        tname:'数码',
        dis:'为发骚而生'
    },{
        gid:'00004',
        gname:'小米6',
        price:2500,
        truePrice:2300,
        pic:'00001.img',
        tname:'数码',
        dis:'为发骚而生'
    },{
        gid:'00005',
        gname:'小米6',
        price:2500,
        truePrice:2300,
        pic:'00001.img',
        tname:'数码',
        dis:'为发骚而生'
    }];
    constructor() {

    }

    ngOnInit(){

    }
}
