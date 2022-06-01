import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VvComponent } from './vv/vv.component';
import { VvService } from './vv.service';



@NgModule({
  declarations: [
    VvComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [VvService],
})
export class VvModule { }
