import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FashionService } from '../fashion.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  newsOnPage: any;

  constructor(private route: ActivatedRoute, private fashionService: FashionService) { }

  ngOnInit(): void {
    this.getCurrentPageNews();
  }

  getCurrentPageNews() {
    const id = +this.route.snapshot.paramMap.get('id');
    const currentPageNewsObservable = this.fashionService.getNewsPageById(id);
    currentPageNewsObservable.subscribe(news => this.newsOnPage = news);
  }

  changeTitle(newTitle) {
    this.newsOnPage.title = newTitle;
  }

}
