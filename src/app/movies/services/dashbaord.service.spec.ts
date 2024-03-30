import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashBoardService } from './dashboard.service';

describe('DashBoardService', () => {
  let service: DashBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashBoardService],
    });
    service = TestBed.inject(DashBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
