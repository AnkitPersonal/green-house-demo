import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Disease } from '../../models/disease';
import { DiseaseHubService } from '../../services/diseaseHubService';

@Component({
  selector: 'disease-add',
  templateUrl: './disease-add.component.html',
  styleUrls: ['./disease-add.component.css']
})

export class DiseaseAddComponent implements OnInit {

  id: number;
  disease: Disease;
  public disease_error: boolean = false;

  constructor(public route: ActivatedRoute,
    public diseaseHub: DiseaseHubService,
    public location: Location) {

    this.disease = new Disease(0, null, null, null, null, null);
    route.params.subscribe(params => { this.id = params['id'] });
  }

  ngOnInit() { }

  submit(form) {
    //this.disease = form;
    console.log("Add Compnent: ", form);
    this.diseaseHub.insert(form).subscribe(
      data => {
        //this.disease = data;
        this.location.back();
      },
      err => {
        this.disease_error = true;
        console.log("Add Compnent: Err:", err);
      }
    );
  }

  back(): void {
    this.location.back();
  }
}
