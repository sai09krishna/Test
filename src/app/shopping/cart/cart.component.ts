import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems=[];
  index:number;
  totalPrice:number=0;
  show:boolean=false;
  buttonShow:boolean=true;
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.cartItems=JSON.parse(localStorage.getItem('cartItem'));
    if(this.cartItems.length == 0){
      this.buttonShow=false;
    }
  }
  backTo(){
    this.route.navigate(['']);
  }
  gotoShop(){
    this.route.navigate(['/']);
  }

  showDetails(){
    this.show =!this.show;
    this.totalPrice=0;
    this.calculatePrice();

  }

  calculatePrice(){
    this.cartItems.map((item)=>{
      this.totalPrice=this.totalPrice+(item.cost*item.total);
    })
  }

  removeItem(item){
    let res=this.findMatch(item);
    if(res.id == item.id){
      this.cartItems.splice(this.index,1);
    }
    if(this.cartItems.length == 0){
      this.buttonShow=false;
    }
    localStorage.setItem('cartItem',JSON.stringify(this.cartItems));
  }

  incrementOrDec(item,inc){
    if(inc =="increment"){
      let res=this.findMatch(item);
      this.buttonShow=true;
      if(res.id == item.id){
        this.cartItems[this.index].total+=1;
      }
    }
    else if(inc == "decrement"){
      let res=this.findMatch(item);
      if(res.id == item.id){
        this.cartItems[this.index].total-=1;
        //console.log(this.cartItems[this.index].total-=1);
      }
    }
    if(this.cartItems[this.index].total==0){
      this.cartItems.splice(this.index,1);
    }
    if(this.cartItems.length ==0){
      this.show=false;
      this.buttonShow=false;
    }
   // console.log(this.cartItems);
    localStorage.setItem('cartItem',JSON.stringify(this.cartItems));
    this.totalPrice=0;
    this.calculatePrice();
  }

  findMatch(item){
    return this.cartItems.find((items,index)=>{
      this.index=index;
      return item.id == items.id
    });
  }

}
