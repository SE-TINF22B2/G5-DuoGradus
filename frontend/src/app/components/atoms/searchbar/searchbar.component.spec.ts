import { ComponentFixture, TestBed } from '@angular/core/testing';


import { SearchbarComponent } from './searchbar.component';
import { UserfilterPipe } from 'app/pipes/userfilter.pipe';
import { FormsModule } from '@angular/forms';

describe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchbarComponent, UserfilterPipe],
      imports: [FormsModule]
      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
