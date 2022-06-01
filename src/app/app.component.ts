import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './vv/vv.model';
import { VvService } from './vv/vv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public products: Product[] = [];

  constructor(private _productService: VvService,private router: Router) {
    this.products = this._productService.getProducts();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
