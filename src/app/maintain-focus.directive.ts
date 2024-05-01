import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaintainFocus]'
})
export class MaintainFocusDirective {
  constructor(private el: ElementRef<HTMLInputElement>) { }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent): void {
    // Check if the clicked element is not the input and refocus if necessary
    if (!this.el.nativeElement.contains(event.target as Node)) {
      this.el.nativeElement.focus();
    }
  }
}
