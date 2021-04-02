import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'result', component: ResultComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true}), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
