import { SearchResult } from "./../model/search-result";
import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-search-results",
	templateUrl: "./search-results.component.html",
	styleUrls: ["./search-results.component.css"]
})
export class SearchResultsComponent implements OnInit {
	@Input() results: SearchResult[];

	constructor() {}

	ngOnInit() {}
}
