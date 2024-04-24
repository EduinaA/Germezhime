import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHiveComponent } from './single-hive.component';

describe('SingleHiveComponent', () => {
  let component: SingleHiveComponent;
  let fixture: ComponentFixture<SingleHiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleHiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleHiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
