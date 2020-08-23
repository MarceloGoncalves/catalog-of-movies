import { Component, OnInit, Input } from '@angular/core';

import {Movie} from '../../../../shared/model/movie.model'

@Component({
  selector: 'app-info-movie',
  templateUrl: './info-movie.component.html',
  styleUrls: ['./info-movie.component.scss']
})
export class InfoMovieComponent implements OnInit {

  @Input() movie:Movie;


  ngOnInit(): void {
  }

}
