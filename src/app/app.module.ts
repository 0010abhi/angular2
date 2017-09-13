import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel lives here.
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FacebookModule } from 'ngx-facebook';
//User-Defined Components 
import { AppRoutingModule } from './app-routing.module'
import { AppComponent }  from './app.component';

import { WordPanelComponent } from './component/word-panel/word-panel';
import { ListPanelComponent } from './component/list-panel/list-panel';
import { VocabPanelComponent } from './component/vocab-panel/vocab-panel';
import { HowItWorksComponent } from './component/how-it-works/how-it-works'
import { VocabJsonFilterPipe } from './component/vocabJsonFilter.pipe';
import { BoldTheCrosDirective } from './opposite.highlght.directive';


@NgModule({
  imports:[ 
    BrowserModule,
    FormsModule, // Import FromsModule before using NgModel.
    // HttpModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    FacebookModule.forRoot()
  ],
  providers: [
    VocabJsonFilterPipe
  ],
  declarations: [ 
    AppComponent,
    WordPanelComponent,
    ListPanelComponent,
    VocabPanelComponent,
    HowItWorksComponent,
    VocabJsonFilterPipe,
    BoldTheCrosDirective
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
