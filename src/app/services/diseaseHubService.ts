import { Injectable } from '@angular/core';
import { Disease } from '../models/disease';
import { Http, Response } from '@angular/http';
import { Observable, } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

@Injectable()
export class DiseaseHubService {

  diseaseServiceUrl: string;

  //  http://localhost:7000/api/diseases/
  constructor(private http: Http) {
    this.diseaseServiceUrl = "http://localhost:7000/api/diseases/";
  }

  getDiseases() {
    return this.http.get(this.diseaseServiceUrl)
      .map((res) => res.json());
  }

  getDisease(id: number) {
    return this.http.get(this.diseaseServiceUrl + id.toString())
      .map((res) => res.json());
  }

  insert(disease: Disease) {
    return this.http.post(this.diseaseServiceUrl, disease)
      .map((res) => res.json());
  }

  update(disease: Disease) {

    return this.http.put(this.diseaseServiceUrl + disease.diseaseId.toString(), disease)
      .map((res) => res.json());
  }

  delete(diseaseId: Number) {
    return this.http.delete(this.diseaseServiceUrl + diseaseId.toString())
      .map((res) => res.json());
  }

}

