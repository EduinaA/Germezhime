import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidWordsDisplayComponent } from './valid-words-display.component';

describe('ValidWordsDisplayComponent', () => {
  let component: ValidWordsDisplayComponent;
  let fixture: ComponentFixture<ValidWordsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidWordsDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidWordsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
