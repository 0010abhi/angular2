import { Injectable } from '@angular/core';
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

@Injectable()
export class FBForVocabList {
  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
        appId      : '144037026196532',
        xfbml      : true,
        version    : 'v2.10'
    };
    fb.init(initParams);
  }

  shareOnFacebook(url: string) { 
    let params: UIParams = {
        method: 'share',
        href: 'http://groom-your-vocab.herokuapp.com',
        quote: 'Vocabulary Builder',
    };
    this.fb.ui(params)
        .then((res: UIResponse) => console.log("success",res))
        .catch((e: any) => console.error("error",e));
    }
//   shareOnFacebook():any{
//     return this.fb.ui({
//         method: 'feed',
//         link: 'https://developers.facebook.com/docs/',
//         caption: 'Vocabulary Builder',
//     });
// //     , function(response){
// //         console.log("hello share");
// //   }
//   }
}
