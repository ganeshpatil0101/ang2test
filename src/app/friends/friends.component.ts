import { Component, OnInit } from '@angular/core';
import { FriendsService } from './friends.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-friends',
  providers : [FriendsService],
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends:Array<any>;
  constructor(_friendService: FriendsService) {
    // this.friends = _friendService.getFriends();
    // console.log(this.friends);
    _friendService.getFriendsObserver()
    .map( (res)=>{
      console.log(res);
      return res.json();
    })
    .map((res)=>{
      let frd:Array<any> = [];
      res.forEach(element => {
        frd.push({name:element.name, email:element.email})
      });
      return frd;
    })
    .subscribe((data)=>{this.friends = data;}, this.handleError, this.handleComplete);
    // Shortform of callback fun 
    // res => this.friends = res
  }
  handleError(error) {
    console.error(error);
  }
  handleComplete() {
    console.log('Complete');
  }
  ngOnInit() {
    
  }

}
