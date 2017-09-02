import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes, NavigationEnd, ActivatedRoute, Router } from '@angular/router';

//User-Defined Components 
import { WordPanelComponent } from './component/word-panel/word-panel';
import { ListPanelComponent } from './component/list-panel/list-panel';
import { VocabPanelComponent } from './component/vocab-panel/vocab-panel';

const routes: Routes = [
    { path: '', redirectTo: 'vocab', pathMatch: 'full' },
    { path: 'vocab',  component: VocabPanelComponent }
  ];
   
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}
