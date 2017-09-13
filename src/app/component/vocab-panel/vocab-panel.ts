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
    toggleControlText = ['1) Just go through the all lists once one by one.', '2) Try to remember them in a group.', '3) When you come across these words then just track these by search feature.', '4) In the end you will master these.', '5) Finally, you will feel very much confident in radinng/working with english.'];
    howItWorksContent = "How it works";
    shareOnContent = "Share on";
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