import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'victor';
  public nameUpper: string = 'VICTOR';
  public fullname: string = 'VictOR LoPEz';


  public customDate: Date = new Date();




  constructor() {
    enum Status {
      Active,
      Inactive,
      Suspended
    }
    let userStatus: Status = Status.Active;
    console.log(userStatus);

  }

  userStatus: boolean = true;






}
