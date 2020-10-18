import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsList=[
    {id:1,name:"Samsung",cost:10000,total:0},
    {id:2,name:"Samsung-Note",cost:10000,total:0},
    {id:3,name:"Samsung-Galaxy",cost:10000,total:0},
    {id:4,name:"Lg",cost:10000,total:0},
    {id:5,name:"Realme",cost:1000,total:0},
    {id:6,name:"Redmi",cost:10000,total:0},
    {id:7,name:"Sony",cost:1000,total:0},
    {id:8,name:"Oppo",cost:10000,total:0},
    {id:9,name:"Oneplus",cost:1000,total:0}
  ];
  cartItem=[];
  index:number;
  searchTerm;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  //navigating to cart page
  gotoCart(){
    this.route.navigate(['/cart']);
  }
  // Adding items to cart
  addTo(item){
    if(!localStorage.getItem('cartItem')){
      item.total=item.total+1;
      this.cartItem.push(item);
      localStorage.setItem('cartItem',JSON.stringify(this.cartItem));
      this.cartItem=[];
    }else{
      this.cartItem=JSON.parse(localStorage.getItem('cartItem'));
      let fin=this.cartItem.find((ele,index)=> {
        this.index=index;
        return ele.id == item.id
      });
      if(fin!== undefined){
        this.cartItem[this.index].total+=1;
      }
      else{
        item.total+=1;
        this.cartItem.push(item);
      }
      localStorage.setItem('cartItem',JSON.stringify(this.cartItem));
      if(confirm("Item added to cart!, you want to go cart ")){
        this.route.navigate(['cart']);
      }

    }
  }

}
