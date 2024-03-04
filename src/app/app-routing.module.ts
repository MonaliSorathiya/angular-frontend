import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenieStoreDashboardComponent } from './components/genie-store-dashboard/genie-store-dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'genieStoreDashboard', component: GenieStoreDashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
