/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryData Service', () => {
  beforeEachProviders(() => [InMemoryDataService]);

  it('should ...',
      inject([InMemoryDataService], (service: InMemoryDataService) => {
    expect(service).toBeTruthy();
  }));
});
