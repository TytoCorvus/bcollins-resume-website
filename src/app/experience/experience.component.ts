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
      dates: [2019, 2021],
      position: 'Software Engineer',
      summary: 'Built and maintained a variety of internal applications for the financial industry. Responsible for applications tasked with data ingestion and normalization from a variety of sources.',
      homepage: 'https://www.clearwateranalytics.com',
      technology: [ Tech.Java, Tech.SQL_Server, Tech.Jira, Tech.Linux, Tech.Git, Tech.Nodejs, Tech.JavaScript]
    },
    {
      business: 'Expert Institute',
      date: 'June 2021 - May 2023',
      dates: [2021, 2023],
      position: 'Software Engineer',
      summary: 'Expanded functionality of a client-facing website designed as a marketplace for expert witnesses. Refined system performance and reliability and constructed intake for new business offerings.',
      homepage: 'https://www.expertinstitute.com',
      technology: [ Tech.Typescript, Tech.Angular, Tech.Sequelize, Tech.AWS, Tech.Terraform, Tech.PostgresQL, Tech.Bootstrap, Tech.Express, Tech.Nodejs],
    }
  ]

  photos = [
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/1BBCC59C-B7E0-489B-BC30-B0F8BFB894A9_L0_001.JPEG',
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/IMG_2660.JPG',
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/69102479436__F12AE96C-30A1-4EC0-9A2D-BD530B63D574.jpg',
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/70906233553__28C893F9-3AFB-4F6A-93B3-249274985797.jpg',
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/IMG_1999.jpg',
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/IMG_2874.jpg',
    'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/portraits/IMG_3762.jpg'
  ]

  resume = 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/Resume.pdf';

  constructor() { }

  ngOnInit(): void {
  }

  getAge() {
    // Using a close-ish date here, since I don't want to publish my actual birthdate ;)
    const birthDate = new Date('1994-11-15');
    const now = new Date();
    const diff = now.getTime() - birthDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  }
}
