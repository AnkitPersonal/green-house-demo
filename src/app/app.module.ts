// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { routes } from './route';

// App Services 
import { ProductHubService } from './services/productHubService';
import { DiseaseHubService } from './services/diseaseHubService';

// App Components
import { AppComponent} from './app.component';
import { DiseaseListComponent } from './disease/disease-list/disease-list.component';
import { DiseaseAddComponent } from './disease/disease-add/disease-add.component';
import { DiseaseDeleteComponent } from './disease/disease-delete/disease-delete.component';
import { DiseaseDetailComponent } from './disease/disease-detail/disease-detail.component';
import { DiseaseUpdateComponent } from './disease/disease-update/disease-update.component';

@NgModule({
  declarations: [
    AppComponent,
    DiseaseListComponent,
    DiseaseAddComponent,
    DiseaseDeleteComponent,
    DiseaseDetailComponent,
    DiseaseUpdateComponent,

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

  providers: [
    ProductHubService,
    DiseaseHubService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
