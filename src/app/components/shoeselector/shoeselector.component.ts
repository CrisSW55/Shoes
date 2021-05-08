import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoeselector',
  templateUrl: './shoeselector.component.html',
  styleUrls: ['./shoeselector.component.css']
})
export class ShoeselectorComponent implements OnInit {
  title = 'shoes';
  shoesImgArr:Array<string>;
  num:number = 0;
  constructor() { 
    this.shoesImgArr = ['assets/img/adidas_blackwhite.png',
                    'assets/img/adidas_spiderman.png',
                    'assets/img/adidas_bluewhite.png'];
  }

  ngOnInit(): void {
  }


  back(){
    if(this.num > 0){

      --this.num;
    
    }

  }


  forward(){
    if(this.num < this.shoesImgArr.length-1){

      ++this.num;
    
    }


  }
}


