import { Component, OnInit } from '@angular/core';
import {kindergardens, children} from './../../shared/data'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  public children = children;

  ngOnInit(): void {
    console.log(kindergardens);
    console.log(children);
  }


}


