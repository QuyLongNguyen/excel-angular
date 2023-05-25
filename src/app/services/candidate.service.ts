import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ImportResult} from './dto/import-result';
import {Candidate} from '../models/candidate';
import {ImportError} from './dto/import-error';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl = 'http://localhost:8080/candidates';

  private importedCandidate: BehaviorSubject<Candidate[]> = new BehaviorSubject(null);
  private importedError: BehaviorSubject<ImportError[]> = new BehaviorSubject(null);
  constructor(private httpClient: HttpClient) { }

  importFile(form: FormData): Observable<ImportResult<Candidate>>{
    return this.httpClient.post<ImportResult<Candidate>>(`${this.baseUrl}/import`, form);
  }

  saveCandidates(candidates: Candidate[]): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/all`, candidates);
  }
  setCandidate(candidates: Candidate[]): void {
    this.importedCandidate.next(candidates);
  }
  getCandidates(): BehaviorSubject<Candidate[]> {
    return this.importedCandidate;
  }
  setImportedError(importedError: ImportError[]): void {
    this.importedError.next(importedError);
  }
  getImportedError(): BehaviorSubject<ImportError[]> {
    return this.importedError;
  }
}



