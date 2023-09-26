import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITech, Tech } from '../common/tech-detail/tech-detail.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projectDataUrl = 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/projects.json';

  projects$: Observable<IProject[]>;

  constructor(private http: HttpClient) {
    this.projects$ = this.http.get<Array<IProject>>(this.projectDataUrl, { headers: { 'Access-Control-Allow-Origin': '*' },  responseType: 'json'});
  }

  getITech(tech: string): ITech {
    return Tech[tech as keyof typeof Tech];
  }
}

interface IProject {
  name: string;
  photo: string;
  description: string;
  technology: Array<string>;
  repository: string;
}