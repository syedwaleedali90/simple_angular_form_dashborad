import { Component } from '@angular/core';
declare var $;
import { map, filter, take, switchMap } from 'rxjs/operators';
import { LazyLoadScriptService } from './lazy-load.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private lazyLoadService: LazyLoadScriptService,) {
  }
  ngOnInit() {
    this.runSlider();
  }
  runSlider() {
    this.lazyLoadService.loadScript('assets/js/jquerymin.js')
      .pipe(
        map(_ => 'jQuery is loaded'),
        filter(jquery => !!jquery),
        take(1),
        switchMap(_ => this.lazyLoadService.loadScript('assets/js/slickmin.js')),
      )
      .subscribe(_ => {



        

        $('.slick-container').not('.slick-initialized').slick({
          dots: true,
          infinite: true,
          speed: 300,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          responsive: [
            {
              breakpoint: 2000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true,

              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false,
                slidesToScroll: 1,
              },
            },
          ]

        });

     
      });

  }
}
