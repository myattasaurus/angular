import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/view/1', pathMatch: 'full' },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'view/:id', component: ViewEmployeeComponent },
  { path: 'edit/:id', component: EditEmployeeComponent },
  { path: '**', redirectTo: '/create' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
