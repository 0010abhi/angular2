import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { GREVOCABLIST } from '../../VocabList';
import { VocabPanelService } from './vocab-panel.ext';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'vocab-panel',
  providers : [VocabPanelService],
  templateUrl: './vocab-panel.html',
  styleUrls: [ './vocab-panel.css' ]
})
export class VocabPanelComponent implements OnInit { 
    private wordListArr: any[] = [];
    constructor(
        private vocabPanelService: VocabPanelService
        // private router: Router,
        // private activatedRoute: ActivatedRoute
    ){}
    ngOnInit(): void {
        var GREVOCABLISTCOPY = JSON.parse(JSON.stringify(GREVOCABLIST));
        this.wordListArr = this.vocabPanelService.divideIntoTheList(GREVOCABLISTCOPY);
        
        // this.router.events
        // .filter((event) => event instanceof NavigationEnd)
        // .subscribe((event) => {
        //     console.log('NavigationEnd:', event);
        //   });
        // .subscribe((s )=> {
        //     console.log(s);
        //     console.log(NavigationEnd);
        //     if (s instanceof NavigationEnd) {
        //         console.log("aaya andar");
        //       const tree = this.router.parseUrl(this.router.url);
        //       if (tree.fragment) {
        //         const element = document.querySelector("#" + tree.fragment);
        //         if (element) { 
        //             element.scrollIntoView(element); 
        //         }
        //       }
        //     }
        // });
    }
}