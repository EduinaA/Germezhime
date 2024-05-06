import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousResultsComponent } from './previous-results.component';

describe('PreviousResultsComponent', () => {
  let component: PreviousResultsComponent;
  let fixture: ComponentFixture<PreviousResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
