import { Injectable } from '@angular/core';
import { dataCol } from '../dataCol';

@Injectable()
export class ListPanelService {

    divideDataIntoCol(data: any[], colDivide: any): dataCol{
        const coloumnedData: dataCol = {
            dataCol1: [],
            dataCol2: [],
            dataCol3: [],
            dataCol4: []
        };
        coloumnedData.dataCol1 = data.splice(0,colDivide[0]);
        coloumnedData.dataCol2 = data.splice(0,colDivide[1]);
        coloumnedData.dataCol3 = data.splice(0,colDivide[2]);
        coloumnedData.dataCol4 = data.splice(0,colDivide[3]);
        return coloumnedData;
    }

    getAllKeysFromData(data: any[]):any[]{
        const keys: any[] = [];
        data.forEach(element => {
            var key = Object.keys(element)[0];
            keys.push(key);
        });
        return keys;
    }
}