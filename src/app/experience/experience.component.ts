import { Component, OnInit } from '@angular/core';
import { ITech, Tech } from '../common/tech-detail/tech-detail.component';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  languages: Array<ITech> = [
    Tech.Typescript,
    Tech.JavaScript,
    Tech.Java,
    Tech.Rust,
    Tech.SQL,
    Tech.HTML,
    Tech.CSS,
    Tech.Python,
    Tech.Csharp,
  ];

  technologies: Array<ITech> = [
    Tech.Git,
    Tech.Docker,
    Tech.Jira,
    Tech.AWS,
    Tech.SQL_Server,
    Tech.PostgresQL,
    Tech.MongoDB,
    Tech.Unity,
    Tech.Windows,
    Tech.Linux,
    Tech.Angular,
    Tech.NestJS,
    Tech.GraphQL,
    Tech.TypeORM,
    Tech.Sequelize,
    Tech.Nodejs,
    Tech.Express,
    Tech.Bootstrap,
    Tech.Terraform
  ]

  frameworks: Array<ITech> = [
    Tech.Angular,
    Tech.NestJS,
    Tech.GraphQL,
    Tech.TypeORM,
    Tech.Sequelize,
    Tech.Nodejs,
    Tech.Express,
    Tech.Bootstrap,
    Tech.Terraform
  ]

  experience = [
    {
      business: 'Clearwater Analytics',
      date: 'Jan 2019 - Feb 2021',
      position: 'Software Engineer',
      summary: 'Built and maintained a variety of internal applications for the financial industry. Responsible for applications tasked with data ingestion and normalization from a variety of sources.',
      homepage: 'https://www.clearwateranalytics.com',
      technology: [ Tech.Java, Tech.SQL_Server, Tech.Jira, Tech.Linux, Tech.Git, Tech.Nodejs, Tech.JavaScript]
    },
    {
      business: 'Expert Institute',
      date: 'June 2021 - May 2023',
      position: 'Software Engineer',
      summary: 'Expanded functionality of a client-facing website designed as a marketplace for expert witnesses. Refined system performance and reliability and constructed intake for new business offerings.',
      homepage: 'https://www.expertinstitute.com',
      technology: [ Tech.Typescript, Tech.Angular, Tech.Sequelize, Tech.AWS, Tech.Terraform, Tech.PostgresQL, Tech.Bootstrap, Tech.Express, Tech.Nodejs],
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

  openSections: IExperienceSection = {
    languages: true,
    technologies: false,
    frameworks: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle( sectionName: keyof IExperienceSection ){
    this.openSections[sectionName] = !this.openSections[sectionName];
  }

  getAge() {
    // Using a close-ish date here, since I don't want to publish my actual birthdate ;)
    const birthDate = new Date('1994-11-15');
    const now = new Date();
    const diff = now.getTime() - birthDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  }
}

interface IExperienceSection {
  'languages': boolean,
  'technologies': boolean,
  'frameworks': boolean
}
