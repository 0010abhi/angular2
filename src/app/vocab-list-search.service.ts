import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GREVOCABLIST } from './GreVocabList';

@Injectable()
export class VocabListSearchService {
  private greVocabList = GREVOCABLIST;
  constructor(
    
  ) {}

  // search(term: string): Observable<any[]> {
  //   return this.greVocabList
  //           .filter()
  //           .map((response: any) => response.json().data as any[]);
  // }
  // search(term: string): void {
  //   console.log(term);
  //   // return this.greVocabList
  //   //         .filter()
  //   //         .map((response: any) => response.json().data as any[]);
  // }
}