import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../product';
import { ProductService } from './../product.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public products: Product =null
  constructor(
    public ActivatedRoute: ActivatedRoute,
    public ProductService: ProductService
  ) { }

  ngOnInit() {
    let id = (+this.ActivatedRoute.snapshot.params.id)
    this.products = this.ProductService.getProductsByID(id)
    console.log(this.products)
  }

}
