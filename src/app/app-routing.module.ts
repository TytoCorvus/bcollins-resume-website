import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import routes from './content-routes';

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
