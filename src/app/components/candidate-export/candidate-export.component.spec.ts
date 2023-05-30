import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateExportComponent } from './candidate-export.component';

describe('CandidateExportComponent', () => {
  let component: CandidateExportComponent;
  let fixture: ComponentFixture<CandidateExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
