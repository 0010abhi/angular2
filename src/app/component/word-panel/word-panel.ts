import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
    selector: 'word-panel',
    providers: [],
    templateUrl: 'app/component/word-panel/word-panel.html',
    styleUrls: ['app/component/word-panel/word-panel.css']
})

export class WordPanelComponent implements OnInit {
    @Input() themeWord: any;
    @Input() wordList: any;
    @Input() wordLocation: any;

    private list: any[];
    private wordLoc: any;
    ngOnInit(): void {
        console.log(this.wordList);
        // this.list =  this.wordList;
        // this.wordLoc = this.wordLocation;
        // console.log(this.list,this.wordLoc);
        // .filter((event) => event instanceof NavigationEnd)
        // .map(() => this.activatedRoute)
        // .map((route) => {
        //     console.log("hello", route);
        //     // while (route.firstChild) route = route.firstChild;
        //     return route;
        //     })
        // .subscribe((event) => {
        // console.log('NavigationEnd:', event);
        //     const tree = this.router.parseUrl(this.router.url);
        //     if (tree.fragment) {
        //         var listNumber = tree.fragment.split(".")[0];
        //         const ele = document.getElementById('accord'+listNumber);
        //         ele.click();
        //         const element = document.getElementById(tree.fragment);
        //         if (element) {
        //             setTimeout(function(){
        //                 element.scrollIntoView(); 
        //                 element.focus();
        //             },100);   
        //         }
        //     }
        // });
    }
    
    // onAnchorClick():void{
    //     // this.activatedRoute.fragment.subscribe ( f => {
    //     //     const element = document.querySelector ( "#" + f )
    //     //     if ( element ) element.scrollIntoView ( element )
    //     // });
    //     // this.router.events
    //     // // .filter((event) => event instanceof NavigationEnd)
    //     // // .subscribe((event) => {
    //     // //     console.log('NavigationEnd:', event);
    //     // //   });
    //     // .subscribe((s )=> {
    //     //     console.log(s);
    //     //     console.log(NavigationEnd);
    //     //     if (s instanceof NavigationEnd) {
    //     //         console.log("aaya andar");
    //     //       const tree = this.router.parseUrl(this.router.url);
    //     //       if (tree.fragment) {
    //     //         const element = document.querySelector("#" + tree.fragment);
    //     //         if (element) { 
    //     //             element.scrollIntoView(element); 
    //     //         }
    //     //       }
    //     //     }
    //     });
    // }
}
