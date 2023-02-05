import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public msg = ''
  public catelist = [];
  public plist:any
  ADMIN_PRODUCT="";
  private fileToUpload : any = null;
  prodList:any=[];
 @ViewChild("frm") frm:any;
   
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

 get productList(){
  return JSON.parse(localStorage.getItem("products")!)
 }

 
  public save(frmdata:any)
  {
    if(frmdata){
      console.log(frmdata,this.productList);
      
        
        if(this.productList){
          this.prodList=this.productList
        }
         this.prodList.push(frmdata)
      localStorage.setItem("products",JSON.stringify(this.prodList))
      alert("Product Saved")
      this.frm.reset()
    }else{
      this.msg="Insert data agian."
    }
    // this.http.post(this.ADMIN_PRODUCT,frmdata).subscribe((response:any)=>
    // {

    // });
  }

}
