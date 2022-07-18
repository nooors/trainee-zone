import { Component, OnInit } from "@angular/core";
import { project } from "src/app/model/project.model";
import { Project } from "../interfaces/project.interface";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  projects!: Project[];
  constructor() {}

  ngOnInit(): void {
    this.projects = project;
  }
}
