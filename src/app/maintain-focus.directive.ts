import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaintainFocus]'
})
export class MaintainFocusDirective {
  private originallyReadOnly = true; // State to track if input should be readonly

  constructor(private el: ElementRef<HTMLInputElement>) {
    // Set the input initially to readonly if it's not focused
    this.setReadOnlyState(this.originallyReadOnly);
  }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    // Check if the clicked element is the input and manage focus and readonly state
    if (this.el.nativeElement.contains(event.target as Node)) {
      this.setReadOnlyState(false); // Allow editing when input is directly clicked
    } else {
      this.setReadOnlyState(true); // Otherwise, keep it readonly
      this.el.nativeElement.focus(); // Maintain focus even when readonly
    }
  }

  @HostListener('blur', ['$event'])
  public onBlur(event: FocusEvent): void {
    // When focus is lost, revert to readonly after a delay, if originally set
    setTimeout(() => {
      this.setReadOnlyState(this.originallyReadOnly);
    }, 100); // Short delay to allow for seamless interaction and refocus
  }

  private setReadOnlyState(readonly: boolean): void {
    if (readonly) {
      this.el.nativeElement.setAttribute('readonly', 'true');
    } else {
      this.el.nativeElement.removeAttribute('readonly');
    }
  }
}
