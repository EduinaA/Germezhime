import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDialogComponent } from './welcome-dialog.component';
import {MatDialogActions, MatDialogClose} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

describe('WelcomeDialogComponent', () => {
  let component: WelcomeDialogComponent;
  let fixture: ComponentFixture<WelcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeDialogComponent, MatDialogActions, MatButton, MatDialogClose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
