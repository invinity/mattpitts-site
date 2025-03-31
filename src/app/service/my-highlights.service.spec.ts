import { TestBed } from '@angular/core/testing';

import { MyHighlightsService } from './my-highlights.service';

describe('MyHighlightsService', () => {
  let service: MyHighlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHighlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
