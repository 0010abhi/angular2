import { Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'vocabJsonFilter'})
export class VocabJsonFilterPipe implements PipeTransform{
    words: any[];
    transform(data: any): any[] {
        this.words = [];
        data.forEach((element: any) => {
            var themeWord = Object.keys(element)[0];
            var wordList = element[Object.keys(element)[0]];
            this.words.push({
                'themeWord': themeWord, 
                'wordList': wordList
            });
        });
        return this.words;
    }
}