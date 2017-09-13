import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[boldTheCross]' })
export class BoldTheCrosDirective {
    constructor(el: ElementRef) {
        setTimeout(function(){
            if(el.nativeElement.innerText.startsWith('(X)')){
                el.nativeElement.innerHTML = '<strong>' + el.nativeElement.innerHTML + '</strong>';
            }
        });
    }
}