import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateTableComponent } from './components/candidate-table/candidate-table.component';
import {HttpClientModule} from '@angular/common/http';
import { CandidateImportComponent } from './components/candidate-import/candidate-import.component';
import {FormsModule} from '@angular/forms';
import { CandidateExportComponent } from './components/candidate-export/candidate-export.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidateTableComponent,
    CandidateImportComponent,
    CandidateExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
