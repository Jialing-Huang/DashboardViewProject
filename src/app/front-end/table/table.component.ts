import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarInfo} from './data.model';
import { MatTableDataSource,MatPaginator} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['make', 'model', 'price'];

  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //Read the online data and create a new instance of MatTableDataSource to get the data
    this.http.get('https://api.myjson.com/bins/15psn9').subscribe((response:CarInfo[])=>{
      this.dataSource = new MatTableDataSource<CarInfo>(response);
      this.dataSource.paginator = this.paginator;
    });
    
    
  }

}
