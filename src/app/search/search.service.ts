import { SearchResult } from "./../model/search-result";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, Output } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SearchService {
	constructor(private http: HttpClient) {}

	@Output()
	searchMovies(search: String): Observable<SearchResult[]> {
		const params = new HttpParams({ fromString: `title=${search}` });
		return this.http.get<SearchResult[]>(
			"http://localhost:8080/api/movies/searchIMDB",
			{
				params: params
			}
		);
	}
	private handleError(error: Response) {
		return Observable.throw(error.statusText);
	}
}
