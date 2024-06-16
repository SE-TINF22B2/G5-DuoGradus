import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MainpageService } from './mainpage.service';

describe('MainpageService', () => {
  let service: MainpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MainpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
