import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { ChallengeDialogComponent } from './challenge-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChallengeDialogComponent', () => {
  let component: ChallengeDialogComponent;
  let fixture: ComponentFixture<ChallengeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeDialogComponent],
      imports: [BrowserAnimationsModule],
      providers: [HttpClient, HttpHandler]

    }).compileComponents();

    fixture = TestBed.createComponent(ChallengeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
