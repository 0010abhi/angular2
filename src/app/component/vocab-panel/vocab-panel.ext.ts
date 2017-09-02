import { Injectable } from '@angular/core';

@Injectable()
export class VocabPanelService {
    //metadata related to display the list
    x = [
        {"ListLen": 10, "ColDivide":[3,2,3,2]},
        {"ListLen": 11, "ColDivide":[2,3,3,3]},
        {"ListLen": 9, "ColDivide":[2,3,1,3]},
        {"ListLen": 7, "ColDivide":[1,3,1,3]},
        {"ListLen": 10, "ColDivide":[4,2,2,2]},
        {"ListLen": 12, "ColDivide":[5,3,2,2]},
        {"ListLen": 9, "ColDivide":[3,1,2,3]},
        {"ListLen": 7, "ColDivide":[1,2,2,2]}
    ];
    divideIntoTheList(data: any[]): any[]{
        var listData:any[] = [];
        var counter = 0, splicedData;
        while(data.length>0){
            splicedData = data.splice(0,this.x[counter].ListLen);
            listData.push({
                "ListNumber": counter+1,
                "ListGist": this.getAllKeysFromData(splicedData),
                "Words": splicedData,
                "colDivide": this.x[counter].ColDivide,
            })
            counter++;
        }
        return listData;
    }

    getAllKeysFromData(data: any[]):any[]{
        const keys: any[] = [];
        data.forEach(element => {
            var key = Object.keys(element)[0];
            keys.push(key);
        });
        return keys;
    }

    getListNumber(indexInOriginalVocabList:number): any{
        var lenCovered = 0, prevColCovered = 0;
        var colCovered = 0, listNum = '', colNum = '', delimiter = '.';
        for (var index = 0; index < this.x.length; index++) {
            lenCovered += this.x[index].ListLen;
            if(lenCovered>=(indexInOriginalVocabList+1)){
                listNum = (index+1).toString();
                var diff = this.x[index].ListLen - (lenCovered - indexInOriginalVocabList +1) + 1;
                for (var colIndex = 0; colIndex < this.x[index].ColDivide.length; colIndex++) {
                    colCovered += this.x[index].ColDivide[colIndex];
                    if(colCovered>diff){
                        colNum = (colIndex===0) ? (colIndex+1).toString() + delimiter + (diff+1).toString() : (colIndex+1).toString() + delimiter + (diff+1 - prevColCovered).toString();
                        return (listNum + delimiter + colNum);
                    } else{
                        prevColCovered = colCovered;
                    }
                } 
            }
        }
        
    }
}