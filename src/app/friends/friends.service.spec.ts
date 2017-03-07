import { TestBed, inject } from '@angular/core/testing';

import { FriendsService } from './friends.service';

describe('FriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FriendsService]
    });
  });

  it('should ...', inject([FriendsService], (service: FriendsService) => {
    expect(service).toBeTruthy();
  }));
});
