import {SearchService} from './search.service';
import {FormsModule} from '@angular/forms';
import {SearchComponent} from './search.component';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule, HttpClientModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
  providers: [SearchService]
})
export class SearchModule {}
