import { SearchService } from "./search.service";
import { Component, OnInit, Injectable, Output } from "@angular/core";

@Injectable()
@Component({
	selector: "app-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.css"]
})
export class SearchComponent implements OnInit {
	search: String = "";
	error = {};

	@Output() data = {};

	submitted = false;

	constructor(private searchService: SearchService) {}

	ngOnInit() {}

	onSubmit() {
		this.submitted = true;
		this.searchService.searchMovies(this.search).subscribe(
			data =>
				(this.data = {
					...data
				}), // success path
			error => (this.error = error) // error path
		);
	}
}
