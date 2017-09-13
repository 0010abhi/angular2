import { Component, OnInit } from '@angular/core';
import { VocabListSearchService } from './vocab-list-search.service';
import { GREVOCABLIST } from './VocabList';
import { VocabPanelService } from './component/vocab-panel/vocab-panel.ext';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
 selector: 'my-app',
 providers: [VocabListSearchService, VocabPanelService],
 templateUrl: './app.component.html',
 styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
    private title = 'Vocab Builder';
    private description = "Here the words are categorized, so that you can learn words at faster rate.";
    private greVocabList =  GREVOCABLIST;
    private listNumber: Number;
    private showMatchedWords: boolean = false;

    private matchedWords: any[] = [];
    constructor(
        private vocabListSearchService: VocabListSearchService,
        private vocabPanelService: VocabPanelService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ){}

    getFragmentAndScroll(): void{
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
            var listNumber = tree.fragment.split(".")[0];
            const ele = document.getElementById('accord'+listNumber);
            if(!ele.getAttribute('aria-expanded') || ele.getAttribute('aria-expanded')==="false"){
                ele.click();
            }
            const element = document.getElementById(tree.fragment);
            if (element) {
                setTimeout(function(){
                    element.scrollIntoView(); 
                    element.focus();
                },100);   
            }
        }
    }
    ngOnInit(): void {
        this.router.events
        .filter((event) => event instanceof NavigationEnd)
        .map(() => this.activatedRoute)
        .map((route) => {
            console.log("hello", route);
            // while (route.firstChild) route = route.firstChild;
            return route;
            })
        .subscribe((event) => {
        console.log('NavigationEnd:', event);
            this.getFragmentAndScroll();
        });
    }
    
    // Push a search term into the observable stream.
    search(term: string): void {
        this.matchedWords=[];
        this.showMatchedWords = true;
        if(!term){
            return;
        }
        let key, value; 
        this.greVocabList.filter((element,index)=>{
            key = Object.keys(element);
            value = element[key[0]];
            //checking if key matches.
            if(key[0].startsWith(term.toUpperCase())){
                this.matchedWords.push({"Index":this.getList(index),"Word":key[0]});
            }; 
            //checking if any array value matches.
            value.forEach((val:any)=>{
                if(val.startsWith(term.toUpperCase())){
                    this.matchedWords.push({"Index":this.getList(index),"Word":val});
                }
            }); 
        });
    }

    GoTo(listLocation:string): void{
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment===listLocation){
            var listNumber = tree.fragment.split(".")[0];
            const ele = document.getElementById('accord'+listNumber);
            if(ele.getAttribute('aria-expanded')==="false"){
                ele.click();
            }
            const element = document.getElementById(tree.fragment);
            if (element) {
                setTimeout(function(){
                    element.scrollIntoView(); 
                    element.focus();
                },100);   
            }
        } else {
            let link = ['/vocab'];
            this.router.navigate( link, { fragment: listLocation } );
        }
        
    }

    getList(index:number): any{
        return this.vocabPanelService.getListNumber(index);
    }
}