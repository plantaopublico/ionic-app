import {Http} from '@angular/http';

export class PlantaoPublico {

  constructor(private http:Http) {}

  searchMovies(movieName) {
    var url = '';
    var response = this.http.get(url).map(res => res.json());
    return response;
  }
}
