import { Project } from './components/interfaces/project.interface';
import { Component, OnInit } from '@angular/core';

import { project } from './model/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  projects!: Project[];
  title = 'trainee-zone';

  ngOnInit() {
    this.projects = project;
  }
}
