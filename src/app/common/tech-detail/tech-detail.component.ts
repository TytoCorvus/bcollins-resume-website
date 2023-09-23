import { Component, Input } from '@angular/core';

@Component({
  selector: 'tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.scss']
})
export class TechDetailComponent {
  @Input() tech!: ITech; 
  @Input() small: boolean = false;

  iconPath = 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/icons/'
  
  getIconPath(icon: string) {
    return `${this.iconPath}${icon}.png`
  }
}

export interface ITech {
  name: string,
  icon: string
}

export const Tech = {
  Typescript: {name: 'Typescript', icon: 'typescript'},
  Angular: {name: 'Angular', icon: 'angular'},
  NestJS: {name: 'NestJS', icon: 'nestjs'},
  GraphQL: {name: 'GraphQL', icon: 'graphql'},
  TypeORM: {name: 'TypeORM', icon: 'typeorm'},
  Sequelize: {name: 'Sequelize', icon: 'sequelize'},
  JavaScript: {name: 'JavaScript', icon: 'javascript'},
  Nodejs: {name: 'Node.js', icon: 'nodejs'},
  Express: {name: 'Express', icon: 'express'},
  Java: {name: 'Java', icon: 'java'},
  Rust: {name: 'Rust', icon: 'rust'},    
  SQL: {name: 'SQL', icon: 'sql'},
  SQL_Server: {name: 'SQL Server', icon: 'mssqlserver'},
  PostgresQL: {name: 'Postgres', icon: 'postgres'},
  MongoDB: {name: 'MongoDB', icon: 'mongodb'},
  HTML: {name: 'HTML', icon: 'html5'},
  CSS: {name: 'CSS', icon: 'css'},
  Bootstrap: {name: 'Bootstrap', icon: 'bootstrap'},
  Python: {name: 'Python', icon: 'python'},
  Csharp: {name: 'C#', icon: 'csharp'},
  Unity: {name: 'Unity', icon: 'unity'},
  Git: {name: 'Git', icon: 'git'},
  GitHub: {name: 'GitHub', icon: 'github'},
  BitBucket: {name: 'BitBucket', icon: 'bitbucket'},
  Docker: {name: 'Docker', icon: 'docker'},
  Jira: {name: 'Jira', icon: 'jira'},
  AWS: {name: 'AWS', icon: 'aws'},
  Terraform: {name: 'Terraform', icon: 'terraform'},
  Windows: {name: 'Windows', icon: 'windows'},
  Linux: {name: 'Linux', icon: 'linux'},
}
