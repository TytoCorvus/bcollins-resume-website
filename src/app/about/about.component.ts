import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  jigsaw = {
    link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/puzzle.png',
    credit: 'https://www.flaticon.com/free-icons/puzzle'
  }

  study = {
    link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/study.png',
    credit: 'https://www.flaticon.com/free-icons/teacher'
  }

  toolbox = {
    link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/tool-box.png',
    credit: 'https://www.flaticon.com/free-icons/toolbox'
  }

  icons = [
    { link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/management.png', message: 'Enterprise Software', credit: 'https://www.flaticon.com/free-icons/software-engineer'},
    { link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/engineer.png', message: 'Website Development', credit: 'https://www.flaticon.com/free-icons/devops'},
    { link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/maintenance.png', message: 'Dev Ops & Software Maintenance', credit: 'https://www.flaticon.com/free-icons/machinery'},
    { link: 'https://brycecollins-resume-website-assets.s3.us-west-2.amazonaws.com/photos/tech-images/web-administrator.png', message: 'Cloud Construction', credit: 'https://www.flaticon.com/free-icons/engineer'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
