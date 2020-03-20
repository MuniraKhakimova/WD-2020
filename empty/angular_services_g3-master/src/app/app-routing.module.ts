import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionNewsListComponent } from './fashion-news-list/fashion-news-list.component';
import { NewsPageComponent } from './news-page/news-page.component';


const routes: Routes = [
  { path: '', component: FashionNewsListComponent },
  { path: 'news/:id', component: NewsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
