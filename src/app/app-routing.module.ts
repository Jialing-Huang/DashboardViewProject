import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatNavComponent } from './front-end/mat-nav/mat-nav.component';

const routes: Routes = [
  {path:'list',component:MatNavComponent},
  {path:'',redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
