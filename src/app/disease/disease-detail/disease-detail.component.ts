import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Disease } from '../../models/disease';
import { DiseaseHubService } from '../../services/diseaseHubService';

@Component({
  selector: 'disease-detail',
  templateUrl: './disease-detail.component.html',
  styleUrls: ['./disease-detail.component.css']
})

export class DiseaseDetailComponent implements OnInit {

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
    this.diseaseHub.getDisease(this.id).subscribe(
      data => { this.disease = data },
      err => { this.disease_error = true; }
    );
  }

  back(): void {
    this.location.back();
  }

}
