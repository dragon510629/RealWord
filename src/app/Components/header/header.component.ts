import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private token = localStorage.getItem('token');
  private isShowRight = false;
  private username = localStorage.getItem('username');
  constructor() { }

  ngOnInit() {
    if(this.token != null){
      this.isShowRight = true;
    }else{
      this.isShowRight = false;
    }
  }

}
