import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';

@Component({
  selector: 'app-friends',
  providers : [FriendsService],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:Array<any>;
  constructor(_friendService: FriendsService) {
    this.friends = _friendService.getFriends();
    console.log(this.friends);
  }

  ngOnInit() {
  }

}
