import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-candidate-export',
  templateUrl: './candidate-export.component.html',
  styleUrls: ['./candidate-export.component.css']
})
export class CandidateExportComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  exportCandidateFile(): void{
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.httpClient.get('http://localhost:8080/candidates/export', httpOptions)
      .subscribe((data: Blob) => {
        console.log(data);
        const file = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(file, 'example.xlsx');
      });
  }
}


