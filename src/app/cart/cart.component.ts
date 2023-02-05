import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private cartlist:any;
  public plist:any;

  constructor(private http:HttpClient,private router:Router) { }

  public payment()
  {
    // this.router.navigateByUrl("/payment");
  }

  ngOnInit(): void {
    this.loadcart()
  }

  public loadPlist()
  {    
    this.plist = []
    for(var x=0; x<this.cartlist.length;x++)
    {
      var ob = this.cartlist[x];
      var pid = ob.product;

      // this.http.post(GET_PRODUCT,{pid:pid}).subscribe(response=>
      // {
      //   this.plist.push(response)
      // });
    }
  }

  public loadcart ()
  {
    // this.http.get(LOAD_CART).subscribe(response=>{
        // console.log(response)
        // this.cartlist = response;        

        // this.loadPlist();
    // })
  }
}
