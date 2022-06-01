import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VvComponent } from './vv/vv/vv.component';

const routes: Routes = [
  { path: 'product/:id', component: VvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
