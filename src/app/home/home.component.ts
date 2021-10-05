import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Store {
  name: string;
  dir: string;
  geo: string;
  
}

const ELEMENT_DATA: Store[] = [
  {name: 'Tienda la delfina', dir: 'Calle 6c 1467', geo: '132.125, 142.167'},
  {name: 'Super mercado', dir: 'Calle 7a 1310', geo: '131.115, 112.167'},

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dir', 'geo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
    
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }
}