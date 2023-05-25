import { Component, OnInit } from '@angular/core';
import {CandidateService} from '../../services/candidate.service';
import {Candidate} from '../../models/candidate';
import {ImportError} from '../../services/dto/import-error';

@Component({
  selector: 'app-candidate-table',
  templateUrl: './candidate-table.component.html',
  styleUrls: ['./candidate-table.component.css']
})
export class CandidateTableComponent implements OnInit {

  candidates: Candidate[];
  importedErrors: ImportError[];
  message = '';
  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe(value => this.candidates = value);
    this.candidateService.getImportedError().subscribe(value => this.importedErrors = value);
  }
  submitData(candidates: Candidate[]): void{
    if (window.confirm('Do you want to save data ?')){
      this.candidateService.saveCandidates(candidates)
        .subscribe(() =>  this.message = 'Save success',
                      () => this.message = 'Save failed');
    }
  }
}
