import { RouterModule, Routes } from '@angular/router';

import { DiseaseListComponent } from './disease/disease-list/disease-list.component';
import { DiseaseAddComponent } from './disease/disease-add/disease-add.component';
import { DiseaseDetailComponent } from './disease/disease-detail/disease-detail.component';
import { DiseaseUpdateComponent } from './disease/disease-update/disease-update.component';
import { DiseaseDeleteComponent } from './disease/disease-delete/disease-delete.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: DiseaseListComponent },
    { path: 'create', component: DiseaseAddComponent },
    { path: 'detail/:id', component: DiseaseDetailComponent },
    { path: 'update/:id', component: DiseaseUpdateComponent },
    { path: 'delete/:id', component: DiseaseDeleteComponent },
];

