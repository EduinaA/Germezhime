import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenditjetModalComponent } from './renditjet-modal.component';

describe('ModalComponent', () => {
  let component: RenditjetModalComponent;
  let fixture: ComponentFixture<RenditjetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenditjetModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenditjetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
