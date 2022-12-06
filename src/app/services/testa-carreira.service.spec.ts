import { TestBed } from '@angular/core/testing';

import { TestaCarreiraService } from './testa-carreira.service';

describe('TestaCarreiraService', () => {
  let service: TestaCarreiraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestaCarreiraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
