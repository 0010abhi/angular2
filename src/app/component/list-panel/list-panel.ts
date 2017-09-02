import { Component, Input, OnInit} from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { VocabJsonFilterPipe } from '../vocabJsonFilter.pipe';
import { dataCol } from '../dataCol';
import { ListPanelService } from './list-panel.ext';
import { Router, NavigationEnd } from '@angular/router';
// import 'rxjs/add/operator/filter';

@Component({
    selector: 'list-panel',
    providers: [ListPanelService],
    templateUrl: 'app/component/list-panel/list-panel.html',
    styleUrls: ['app/component/list-panel/list-panel.css']
})

export class ListPanelComponent implements OnInit{
    @Input() listNumber: any;
    @Input() listData: any;
    @Input() colDivide: any;
    @Input() listGist: any;

    constructor(
        private route: ActivatedRoute,
        private listPanelService: ListPanelService,
        private router: Router
        // private activatedRoute: ActivatedRoute
    ) {}

    private serialNum :any;
    private data : any;
    private dataCol: dataCol;
    private colDivideArray: any;
    private listGista: any;
    
    ngOnInit(): void {
        this.data = this.listData;
        this.serialNum = this.listNumber;
        this.colDivideArray = this.colDivide;
        this.listGista = this.listGist;
        this.dataCol = this.listPanelService.divideDataIntoCol(this.data, this.colDivideArray);
        console.log(this.dataCol);
        // this.router.events
        // .filter((event) => event instanceof NavigationEnd)
        // .subscribe((event) => {
        //     console.log('NavigationEnd:', event);
        //   });
    }

    formatAsString(data:any[]): string{
        let dataString = '';
        for (var index = 0; index < data.length; index++) {
            if(index!==data.length-1){
                dataString += data[index] + ", ";
            } else {
                dataString += data[index] ;
            }
        }
        return dataString;
    }

    getMyLocation(listNum:any, colNum:any, rowNum:any):string{
        // console.log(listNum,colNum,rowNum);
        return listNum.toString()+"."+colNum.toString()+"."+rowNum.toString();
    }
}