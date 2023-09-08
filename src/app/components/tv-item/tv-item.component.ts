import { Component, OnInit  , Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-tv-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.scss']
})
export class TvItemComponent implements OnInit {

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
