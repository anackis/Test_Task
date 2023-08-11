import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ViewDataComponent } from './view-data/view-data.component';

const routes: Routes = [
  { path: 'add', component: AddDataComponent },
  { path: 'view', component: ViewDataComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }