import {Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.scss']
})
export class WordInputComponent implements OnChanges {
  @Input() letters: string[] = [];
  @Output() validWord = new EventEmitter<string>();

  currentWord: string = '';
  errorMessage: string = '';
  private wordSet: Set<string> = new Set();

  constructor(private http: HttpClient) {
    this.loadWordList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['letters']) {
      // React to changes in input letters, e.g., re-checking valid words
      console.log('Letters have changed. Re-checking valid words.');
    }
  }

  loadWordList(): void {
    this.http.get('assets/sq_utf8.dic', { responseType: 'text' })
      .subscribe(data => {
        data.split('\n').forEach(word => this.wordSet.add(word.trim().toLowerCase()));
      });
  }

  submitWord(): void {
    if (this.isValidWord(this.currentWord)) {
      this.validWord.emit(this.currentWord);
      this.errorMessage = ''; // Clear any existing error message
      console.log('Valid word');
    } else {
      this.errorMessage = 'Fjalë e pavlefshme!';
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

  printAllValidWords(): void {
    let validWordCount = 0; // Initialize a counter for valid words
    console.log('Valid words for the current set of letters are:');

    this.wordSet.forEach(word => {
      if (this.isValidWord(word)) {
        console.log(word);
        validWordCount++; // Increment the counter for each valid word
      }
    });

    // Print the total number of valid words found
    console.log(`Total number of valid words: ${validWordCount}`);
  }

}
