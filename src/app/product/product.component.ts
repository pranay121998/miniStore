import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 prodList:any=[{title:'',price:""}];
  ngOnInit(): void {
      this.prodList=JSON.parse(localStorage.getItem("products")!)
  }


  
}
