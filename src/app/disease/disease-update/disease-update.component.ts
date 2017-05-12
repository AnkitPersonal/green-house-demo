import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Disease } from '../../models/disease';
import { DiseaseHubService } from '../../services/diseaseHubService';

@Component({
  selector: 'disease-update',
  templateUrl: './disease-update.component.html',
  styleUrls: ['./disease-update.component.css']
})

export class DiseaseUpdateComponent implements OnInit {

  id: number;
  disease: Disease;
  public disease_error: boolean = false;

  constructor(public route: ActivatedRoute,
    public diseaseHub: DiseaseHubService,
    public location: Location) {

    this.disease = new Disease(0, "", "", "", "", "");
    route.params.subscribe(params => { this.id = params['id'] });
  }

  ngOnInit() {
    this.diseaseHub.getDisease(this.id)
      .subscribe(
      data => {
        this.disease = data
      },
      err => {
        this.disease_error = true
      },
    );
  }

  submit(form) {
    console.log(this.disease);

    this.diseaseHub.update(this.disease)
      .subscribe(
      data => {
        console.log("Update Compnent: Success ", data);
        this.location.back();
      },
      err => {
        console.log("Update Compnent: Error ", err);
        this.disease_error = true;
      }
      );
  }

  back(): void {
    this.location.back();
  }
}
