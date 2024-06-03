import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ValidWordsService {
  private readonly validWordsStorageKey = 'validWords';
  private readonly currentLettersStorageKey = 'currentLetters';
  // Daily update of letters
  public readonly letters: string[] = ['t', 's', 'j', 'h', 'e', 'o', 'g'];

  // The set of words that are available from the given letters
  public allValidWordsSet: Set<string> = new Set();

  // The list of valid words that are found from the user
  public validWordsSubject = new BehaviorSubject<{word: string, isPangram: boolean}[]>([]);

  public validationSubject = new BehaviorSubject<boolean>(false);

  // A behavior subject to hold the score of the game
  public scoreSubject = new BehaviorSubject<number>(0);
  public wordsLoaded = new BehaviorSubject(false)

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.loadWordList();
    if (isPlatformBrowser(this.platformId)) {
      this.validWordsSubject.next(this.loadWordsFromLocalStorage());
      this.validWordsSubject.value.forEach(word => {(
        this.scoreSubject.next(this.scoreSubject.value + this.score(word.word))
      )});
      this.validWordsSubject.subscribe(words => {
        localStorage.setItem(this.validWordsStorageKey, JSON.stringify(words));
      });
      localStorage.setItem(this.currentLettersStorageKey, this.letters.join(''));
    }
  }
  private loadWordsFromLocalStorage(): {word: string, isPangram: boolean}[] {
    const localLetters = localStorage.getItem(this.currentLettersStorageKey) || '';
    if (localLetters !== this.letters.join('')) {
      localStorage.removeItem(this.validWordsStorageKey);
      return [];
    }

    if (isPlatformBrowser(this.platformId)) {
      const data = localStorage.getItem(this.validWordsStorageKey);
      return data ? JSON.parse(data) : [];
    }
    return [];
  }

  // Works!

  private loadWordList(): void {
    this.http.get('assets/sq_utf8.dic', { responseType: 'text' })
      .subscribe(data => {
        const allWords = data.split('\n').map(word => word.trim().toLowerCase()).filter(word => word);
        const wordSet = new Set(allWords);
        const allPangrams = allWords.filter(word => word.length === 7 && new Set(word).size === 7);
        //console.log(allPangrams);
        this.createAllValidWordsSet(wordSet);
        this.wordsLoaded.next(true);
      });
  }

  // Create a set of all valid words from the dictionary.
  private createAllValidWordsSet(wordSet: Set<string>): void {
    for (const word of wordSet) {
      if (!word.includes(this.letters[3])) {
        continue;
      }

      if (Array.from(word).every(char => this.letters.includes(char))) {
        this.allValidWordsSet.add(word);
      }
    }
  }

  // calculate the score of the allValidWordsSet
  public calculateScore(): number {
    let score = 0;
    for (const word of this.allValidWordsSet) {
      score += this.score(word);
    }
    return score;
  }

  // Check if a valid word is a pangram.
  private isPangram(word: string): boolean {
    const sortedLettersString = [...this.letters].sort().join('');
    const sortedWord = Array.from(word).sort().join('');
    return sortedWord === sortedLettersString;
  }

  private score(word: string): number {
    if(word.length === 4) {
      return 1;
    }
    if(this.isPangram(word)) {
      return 14;
    } else
    return word.length;
  }

/*  public addWord(word: string): void {
    const currentWords = this.validWordsSubject.value;
    word = word.trim().toLowerCase();
    const isValid = this.allValidWordsSet.has(word);

    if (isValid) {
      const isPangram = this.isPangram(word);

      if (!currentWords.some(w => w.word === word)) {
        const updatedWords = [...currentWords, { word, isPangram }];
        updatedWords.sort((a, b) => a.word.localeCompare(b.word));
        this.validWordsSubject.next(updatedWords);
        this.scoreSubject.next(this.scoreSubject.value + this.score(word));
      } else {
        console.log(`Duplicate word not added: ${word}`);
      }
    } else {
      console.log(`Invalid word not added: ${word}`);
    }
  }*/

 public addWord(word: string): { success: boolean, message: string, wordData?: { word: string, isPangram: boolean } } {
    const currentWords = this.validWordsSubject.value;
    word = word.trim().toLowerCase();
    const isValid = this.allValidWordsSet.has(word);

    if (isValid) {
      const isPangram = this.isPangram(word);
      const existingWord = currentWords.find(w => w.word === word);

      if (!existingWord) {
        const updatedWords = [...currentWords, { word, isPangram }];
        updatedWords.sort((a, b) => a.word.localeCompare(b.word));
        this.validWordsSubject.next(updatedWords);
        this.scoreSubject.next(this.scoreSubject.value + this.score(word));
        return { success: true, message: `Bravo! +1`, wordData: { word, isPangram } };
      } else {
        return { success: false, message: `E ke gjetur njëherë!` };
      }
    }  else if (word.length < 4) {
      return { success: false, message: `Fjala duhet të jetë së paku 4 shkronja!` };
    } else {
      return { success: false, message: `Nuk ndodhet në listë!` };
    }

  }

}
