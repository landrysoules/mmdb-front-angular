import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class SearchService {

  constructor(private http : HttpClient) {}

  searchMovies(search : String) {
    const params = new HttpParams({fromString: `title=${search}`});
    return this
      .http
      .get('http://localhost:8080/api/movies/searchIMDB', {params: params});
  }
}
