import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDialogComponent } from './challenge-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChallengeDialogComponent', () => {
  let component: ChallengeDialogComponent;
  let fixture: ComponentFixture<ChallengeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeDialogComponent],
      imports: [BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
