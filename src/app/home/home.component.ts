import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Store {
  name: string;
  dir: string;
  geo: string;
  
}

const ELEMENT_DATA: Store[] = [
  {name: 'Tienda la Delfina', dir: 'Cra. 15 #7b-2 a, Cl. 7b #26, Zarzal, Valle del Cauca', geo: '4.395637, -76.075603'},
  {name: 'Super Mercado Centenario', dir: 'Calle 7a ##15-04, Zarzal, Valle del Cauca', geo: '4.395019, -76.075822'},
  {name: 'Tienda la Fortuna', dir: 'Calle 6C ##15 -12, Zarzal, Valle del Cauca', geo: '4.394698, -76.075897'},
  {name: 'Dulceria Americana', dir: 'Cl. 7a #1539, Zarzal, Valle del Cauca', geo: '4.395118, -76.076088'},
  {name: 'Tienda la esquina de Leo', dir: 'Carrera 15, Zarzal, Valle del Cauca', geo: '4.396060, -76.075419'},
  {name: 'El Paisa', dir: 'Cra. 8 #13-08, Zarzal, Valle del Cauca', geo: '4.396108, -76.068648'},
  {name: 'Supermercado Se Vende', dir: 'Zarzal, Valle del Cauca', geo: '4.394704, -76.069966'},


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