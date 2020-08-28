import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { map, shareReplay } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MovieService } from 'src/app/shared/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(700)
      ]),
      transition(':leave',
        animate(0, style({ opacity: 0 })))
    ])
  ]
})
export class SearchBarComponent implements OnInit {

  isTune: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private movieService: MovieService,
    private router: Router) { }

  ngOnInit(): void {
  }

  searchMovies(title: string) {
   if(title){
    this.router.navigate(['/movie/movie-list', title]);
   }

  }


}
