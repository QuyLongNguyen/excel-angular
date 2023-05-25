import { Component, OnInit } from '@angular/core';
import {CandidateService} from '../../services/candidate.service';
import {NgForm} from '@angular/forms';
import {ImportResult} from '../../services/dto/import-result';
import {Candidate} from '../../models/candidate';
import {catchError} from 'rxjs/operators';
import {error} from 'protractor';
import {Observable, throwError} from 'rxjs';
import {tryCatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-candidate-import',
  templateUrl: './candidate-import.component.html',
  styleUrls: ['./candidate-import.component.css']
})
export class CandidateImportComponent implements OnInit {

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  onImport(data: any): void {
    const formData = new FormData();
    formData.append('file', data.files[0]);
    this.candidateService.importFile(formData)
            .subscribe(response => this.handleResponse(response) ,
              err => this.handleError(err)
              );
  }

  handleError(err): Observable<any>{
    if (err.status === 400){
      this.candidateService.setImportedError(err.error.errors);
    }
    return throwError(err);
  }
  handleResponse(response: ImportResult<Candidate>): void {
    this.candidateService.setCandidate(response.data);
    this.candidateService.setImportedError(null);
  }
}
