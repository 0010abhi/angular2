import { Component, Input, OnInit } from '@angular/core';
import { FBForVocabList } from '../../facebook.service';
// import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'how-it-works',
    providers: [FBForVocabList],
    templateUrl: 'app/component/how-it-works/how-it-works.html',
    styleUrls: ['app/component/how-it-works/how-it-works.css']
})

export class HowItWorksComponent implements OnInit {
    private suggestMe: boolean = false;
    @Input() usedFor: any;
    @Input() content: any;
    @Input() toggleControlText: any[];
    constructor(
        private fbForVocabList: FBForVocabList
    ){}
    ngOnInit(): void {}

    shareOnFb():void{
        console.log("aa gya");
        let x = this.fbForVocabList.shareOnFacebook('abhishe');
        console.log(x);
    }
}
