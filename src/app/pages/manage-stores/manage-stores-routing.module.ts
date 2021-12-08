
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageStoresComponent } from './manage-stores.component';


const routes: Routes = [
  {
    path: '',
    component: ManageStoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageStoresRoutingModule { }
