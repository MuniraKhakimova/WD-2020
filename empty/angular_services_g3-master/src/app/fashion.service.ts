import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NEWS } from './news';

@Injectable({
  providedIn: 'root'
})
export class FashionService {
  serviceNews = NEWS;

  getFashionNewsList(): Observable<string[]> {
    return of(this.serviceNews);
  }

  addNews() {
    this.serviceNews.push('Unbelievable news - ' + new Date());
  }

  getNewsPageById(id): Observable<any> {
    const neededNewsPage = this.serviceNews.find(newsPage => newsPage.id === id);
    return of(neededNewsPage);
  }
}
