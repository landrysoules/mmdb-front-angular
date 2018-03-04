import { HttpClientModule } from "@angular/common/http";
import { SearchService } from "./search/search.service";
import { SearchComponent } from "./search/search.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { TopBarContainerComponent } from "./topbar/topbar-container.component";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		SearchResultsComponent,
		TopBarContainerComponent,
		SearchComponent
	],
	imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
	providers: [SearchService],
	bootstrap: [AppComponent]
})
export class AppModule {}
