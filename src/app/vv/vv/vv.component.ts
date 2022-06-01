import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../vv.model';
import { VvService } from '../vv.service';

@Component({
  selector: 'app-vv',
  templateUrl: './vv.component.html',
  styleUrls: ['./vv.component.css']
})
export class VvComponent implements OnInit {

  public product: Product ;

  constructor(private _Activatedroute: ActivatedRoute,
    private _productService: VvService) {
      this.product=this._productService.getProductById('0');
  }

  ngOnInit(): void {
    const _id= this._Activatedroute.snapshot.paramMap.get("id");    
    console.log(_id)
    this.product = this._productService.getProductById(_id);
  }


}
