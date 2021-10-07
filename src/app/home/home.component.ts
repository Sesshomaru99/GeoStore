import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Store {

}

const ELEMENT_DATA: Store[] = [

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    
  }

}