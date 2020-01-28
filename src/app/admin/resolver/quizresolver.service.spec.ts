import { TestBed } from '@angular/core/testing';

import { QuizresolverService } from './quizresolver.service';

describe('QuizresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizresolverService = TestBed.get(QuizresolverService);
    expect(service).toBeTruthy();
  });
});
