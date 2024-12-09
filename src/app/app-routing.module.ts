import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuilderPage } from './components/builder-page.component';

const routes: Routes = [
  {
    path: '**',
    component: BuilderPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
