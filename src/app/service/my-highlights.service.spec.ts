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

  it('should have highlights defined', () => {
    expect(service.highlights).not.toHaveSize(0);
  });

  it('should have skills defined', () => {
    expect(service.skills).not.toHaveSize(0);
  });
});
