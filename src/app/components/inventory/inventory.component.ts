import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes,Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private  route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
