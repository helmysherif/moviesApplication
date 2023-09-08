import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemData:Movie | null = null;
  itemID:any;
  currentUrl:any;
  constructor(
    private router:ActivatedRoute,
    private moviesService:MoviesService,
    private route:Router
  ) { }
  ngOnInit(){
    this.currentUrl = this.route.url;
  }
}
