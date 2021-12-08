
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePopupComponent } from './manage-popup.component';


const routes: Routes = [
  {
    path: '',
    component: ManagePopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagePopupRoutingModule { }
