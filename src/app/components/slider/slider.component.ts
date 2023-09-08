import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations : [
    trigger('slideFade' , [
      state('void' , style({opacity : 0})),
      transition('void <=> *' , [animate('1s')]),
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() Items:Movie[] = [];
  @Input() isBanner:boolean = false;
  currentSlideIndex:number = 0;
  imgSrc='https://image.tmdb.org/t/p/original/';
  constructor(){}
  ngOnInit(){
    if(!this.isBanner)
    {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.Items.length;
      } , 5000)
    }
  }
}