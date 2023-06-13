import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:"",redirectTo:'main',pathMatch:"full"},
  {path:"main",component:MainComponent},
  {path:"header",component:HeaderComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
