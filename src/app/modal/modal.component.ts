import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() show: boolean = false;
  @Output() close = new EventEmitter<void>();

  public closeModal() {
    this.close.emit(); // Emit an event when the modal is closed
  }
}
