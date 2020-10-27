import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ResultsComponent } from './pages/results/results.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path:'results', component: ResultsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
