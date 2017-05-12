import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Disease } from '../../models/disease';
import { DiseaseHubService } from '../../services/diseaseHubService';

@Component({
  selector: 'disease-list',
  templateUrl: './disease-list.component.html',
  styleUrls: ['./disease-list.component.css']
})

export class DiseaseListComponent implements OnInit {

  diseases: Disease[];
  disease: Disease;
  public diseases_error: boolean = false;
  query: string;

  constructor(
    private router: Router,
    private diseaseHub: DiseaseHubService,
    private route: ActivatedRoute
  ) {
    this.route
      .queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit() {
    this.diseaseHub.getDiseases().subscribe(
      data => { this.diseases = data; },
      err => { this.diseases_error = true; }
    );
  }
}
