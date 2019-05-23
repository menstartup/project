import { Injectable } from '@angular/core';
import { Product } from './product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product: Product[] =[
    {
      id: 1,
      name: 'Iphone 8',
      price: 10000000,
      status: true,
    },
    {
      id: 2,
      name: 'Iphone X',
      price: 18000000,
      status: true,
    },
    {
      id: 3,
      name: 'Iphone XS',
      price: 20000000,
      status: false,
    },
    {
      id: 4,
      name: 'SamSung note 8',
      price: 15000000,
      status: true,
    },
  ];
  constructor() { }
  getAllProducts(){
    return this.product
  };
  getProductsByID(id:number){
    let result = null;
    for(var i=0; i<this.product.length; i++){
      if(this.product[i].id == id){
        result=this.product[i]; 
        break;
      }
    }
    return result
  }
}
