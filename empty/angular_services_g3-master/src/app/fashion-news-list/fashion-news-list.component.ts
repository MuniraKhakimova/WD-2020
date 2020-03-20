import { Component, OnInit } from '@angular/core';
import { FashionService } from '../fashion.service';

@Component({
  selector: 'app-fashion-news-list',
  templateUrl: './fashion-news-list.component.html',
  styleUrls: ['./fashion-news-list.component.css']
})
export class FashionNewsListComponent implements OnInit {
  componentNews: any = [];

  constructor(public fashionService: FashionService) { }

  ngOnInit(): void {
    this.getComponentNews();
  }

  getComponentNews() {
    const fashionObservable = this.fashionService.getFashionNewsList();
    fashionObservable.subscribe(news => this.componentNews = news);
  }

}
