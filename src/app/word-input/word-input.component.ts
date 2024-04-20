import {Component, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent {
  @Input() letters: string[] = [];
  @Output() validWord = new EventEmitter<string>();

  currentWord: string = '';
  private wordSet: Set<string> = new Set();

  constructor(private http: HttpClient) {
    this.loadWordList();
  }

  loadWordList(): void {
    this.http.get('assets/filtered_sq.dic', { responseType: 'text' })
      .subscribe(data => {
        data.split('\n').forEach(word => this.wordSet.add(word.trim().toLowerCase()));
      });
  }

  submitWord(): void {
    if (this.isValidWord(this.currentWord)) {
      this.validWord.emit(this.currentWord); // Emitting the valid word
      console.log('Valid word');
    } else {
      console.log('Not valid');
    }
    this.currentWord = ''; // Reset the input field
  }

  isValidWord(word: string): boolean {
    const lowercaseWord = word.toLowerCase();
    const centerLetter = this.letters[3].toLowerCase(); // Fourth letter, zero-indexed

    // Check if the word contains the center letter
    if (!lowercaseWord.includes(centerLetter)) {
      return false;
    }

    // Check if the word can be formed from the given letters without frequency limitation
    return this.wordSet.has(lowercaseWord) && this.canFormWord(lowercaseWord, this.letters);
  }

  canFormWord(word: string, letters: string[]): boolean {
    // Convert the array of letters into a Set for quick lookup
    const lettersSet = new Set(letters.map(letter => letter.toLowerCase()));

    // Check if every character in the word exists in the set of provided letters
    return Array.from(word.toLowerCase()).every(char => lettersSet.has(char));
  }

}
