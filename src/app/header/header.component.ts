import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: string = 'Kindergarten-App';
  public imagePath: string = "./../assets/images/kindergarten.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}