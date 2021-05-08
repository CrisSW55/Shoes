import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, Routes,Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
  URL:string = "";
  isDisabled:boolean = false;
  firstName:string = '';
  lastName:string = '';

  id:number = 1;
  private sub: any;
  constructor(private router: Router,private  route: ActivatedRoute) { 
    this.URL =  this.router.url;
    setInterval( ()=>{this.isDisabled = true},1000);
 
    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      console.log("Your current route id: " + this.id);
   });
  
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  onInput(event:Event){
    this.firstName = (<HTMLInputElement>event.target).value;
  
   }
}
