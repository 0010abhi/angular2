import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel lives here.

//User-Defined Components 
import { AppRoutingModule } from './app-routing.module'
import { AppComponent }  from './app.component';

import { WordPanelComponent } from './component/word-panel/word-panel';
import { ListPanelComponent } from './component/list-panel/list-panel';
import { VocabPanelComponent } from './component/vocab-panel/vocab-panel';
import { VocabJsonFilterPipe } from './component/vocabJsonFilter.pipe';


@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule, // Import FromsModule before using NgModel.
    // HttpModule,
    AppRoutingModule
  ],
  providers: [
    VocabJsonFilterPipe
  ],
  declarations: [ 
    AppComponent,
    WordPanelComponent,
    ListPanelComponent,
    VocabPanelComponent,
    VocabJsonFilterPipe
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
