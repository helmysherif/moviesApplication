import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { GenresComponent } from './pages/genres/genres.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import {TabViewModule} from 'primeng/tabview';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import {CarouselModule} from 'primeng/carousel';
import { TvItemComponent } from './components/tv-item/tv-item.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    NotFoundComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieDetailsComponent,
    VideoEmbedComponent,
    TvItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    PaginatorModule,
    FormsModule,
    TabViewModule,
    CarouselModule,
    // NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
