import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeButtonComponent } from './challenge-button.component';
import { ChallengeDialogComponent } from 'app/components/organisms/challenge-dialog/challenge-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ChallengeButtonComponent', () => {
  let component: ChallengeButtonComponent;
  let fixture: ComponentFixture<ChallengeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChallengeButtonComponent, ChallengeDialogComponent],
      imports: [BrowserAnimationsModule],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChallengeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create challenge dialog', () => {
    const element: HTMLElement = fixture.nativeElement;
    const routerOutlet = element.querySelector('app-challenge-dialog');
    expect(routerOutlet).toBeTruthy();
  });

 

});
