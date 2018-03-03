import { SearchModule } from './../search/search.module';
import { NgModule } from '@angular/core';
import { TopBarContainerComponent } from './topbar-container.component';

@NgModule({

  declarations: [TopBarContainerComponent],
  imports: [SearchModule],
  exports: [
    TopBarContainerComponent
  ]
})
export class TopBarModule { }
