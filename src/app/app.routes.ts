import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'



export const appRoutes : Routes = [
    {
       path: '',
       redirectTo: '/index',
       pathMatch: 'full' 
    },
    {
      path: 'index',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'products',
      component: ProductsComponent
    },   
    {
      path: 'products/:id',
      component: ProductDetailComponent
    },
    
  ]