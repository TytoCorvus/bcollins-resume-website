import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  iconPath = 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/icons/'

  languages = [
    { name: 'Typescript', level: 4, icons: ['typescript'], context: [
      { name: 'Angular', icons: ['angular'] },
      { name: 'NestJS', icons: ['nestjs'] },
      { name: 'GraphQL', icons: ['graphql'] },
      { name: 'TypeORM', icons: ['typeorm'] },
      { name: 'Sequelize', icons: ['sequelize'] },
    ] },
    { name: 'JavaScript', level: 4, icons: ['javascript'], context: [
      { name: 'Node.js', icons: ['nodejs'] },
      { name: 'Express', icons: ['express'] },
    ] },
    { name: 'Java', level: 3, icons: ['java'] },
    { name: 'Rust', level: 2, icons: ['rust'] },    
    { name: 'SQL', level: 3, icons: ['sql'], context: [
      { name: 'SQL Server', icons: ['mssqlserver'] },
      { name: 'PostgresQL', icons: ['postgres'] },
      { name: 'MongoDB', icons: ['mongodb'] },
    ] },
    { name: 'HTML', level: 4, icons: ['html5'] },
    { name: 'CSS', level: 3, icons: ['css'], context: [
      { name: 'Bootstrap', icons: ['bootstrap'] }
    ] },
    { name: 'Python', level: 2, icons: ['python'] },
    { name: 'C#', level: 3, icons: ['csharp'], context: [
      { name: 'Unity', icons: ['unity'] },
    ]}
  ]

  technologies = [
    { name: 'Git', icons: ['git'], context: [
      { name: 'GitHub', icons: ['github'] },
      { name: 'BitBucket', icons: ['bitbucket'] },
    ] },
    { name: 'Docker', icons: ['docker'] },
    { name: 'Jira', icons: ['jira'] },
    { name: 'AWS', icons: ['aws'], context: [
      { name: 'Terraform', icons: ['terraform'] },
    ] },
    { name: 'SQL Server', icons: ['mssqlserver'] },
    { name: 'PostgresQL', icons: ['postgres'] },
    { name: 'MongoDB', icons: ['mongodb'] },
    { name: 'Unity', icons: ['unity'] },
    { name: 'Windows', icons: ['windows'] },
    { name: 'Linux', icons: ['linux'] },
  ]

  experience = [
    {
      business: 'Clearwater Analytics',
      date: 'Jan 2019 - Feb 2021',
      position: 'Software Engineer',
      homepage: 'https://www.clearwateranalytics.com',
      technology: [ 'Java', 'Microsoft SQL Server', 'Jira', 'Linux', 'Git']
    },
    {
      business: 'Expert Institute',
      date: 'June 2021 - May 2023',
      position: 'Software Engineer',
      homepage: 'https://www.expertinstitute.com',
      technology: [ 'Typescript', 'Angular', 'Sequelize', 'AWS', 'Terraform', 'Postgres']
    }
  ]

  schooling = [
    {
      name: 'California State University - Sacramento',
      degree: 'Bachelor of Science in Computer Science',
      date: '2015 - 2018',
      homepage: 'https://www.csus.edu/',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getIconPath(icon: string) {
    return `${this.iconPath}${icon}.png`
  }
}
