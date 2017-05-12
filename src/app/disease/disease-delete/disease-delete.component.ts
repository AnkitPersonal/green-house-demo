import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Disease } from '../../models/disease';
import { DiseaseHubService } from '../../services/diseaseHubService';

@Component({
  selector: 'disease-delete',
  templateUrl: './disease-delete.component.html',
  styleUrls: ['./disease-delete.component.css']
})

export class DiseaseDeleteComponent implements OnInit {

  id: number;
  disease: Disease;
  public disease_error: boolean = false;

  constructor(public route: ActivatedRoute,
    public diseaseHub: DiseaseHubService,
    public location: Location) {

    this.disease = new Disease(12, "d", "", "", "", "");
    route.params.subscribe(params => { this.id = params['id'] });
  }

  ngOnInit() {

    this.diseaseHub.getDisease(this.id).subscribe(
      data => { this.disease = data; },
      err => { this.disease_error = true; }
    );
  }

  yes(): void {
    console.log("on Yes");

    this.diseaseHub.delete(this.disease.diseaseId)
      .subscribe(
      data => {
        console.log("Delete Compnent: Success ", data);
        this.disease = data;
        this.location.back();
      },
      err => {
        console.log("Delete Compnent: Error ", err);
        this.disease_error = true;
      }
      );
  }

  no(): void {
    console.log("on No");
    this.location.back();
  }
}
