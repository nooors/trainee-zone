import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Project } from "../interfaces/project.interface";
import { project } from "src/app/model/project.model";

@Component({
  selector: "app-renderer",
  templateUrl: "./renderer.component.html",
  styleUrls: ["./renderer.component.scss"],
})
export class RendererComponent implements OnInit {
  projects!: Project[];
  source!: string;
  tempUrl!: string | undefined;
  iFrameUrl!: string;

  constructor(private router: Router, private params: ActivatedRoute) {
    this.projects = project;
    console.log("hola");
  }

  ngOnInit(): void {
    this.params.params.subscribe((res) => {
      console.log(res);
      const projectFinded = this.projects.find(
        (project) => project.subtitle === res["subtitle"],
      );
      this.source = res["source"].toString();
      switch (this.source) {
        case "web":
          this.tempUrl = projectFinded!.url;
          break;
        case "frontend":
          window.open(projectFinded?.code.frontend, "_blank");
          this.router.navigateByUrl("/home");
          break;
        case "backend":
          window.open(projectFinded?.code.backend, "_blank");
          this.router.navigateByUrl("/home");
          break;
      }
      if (this.tempUrl) {
        this.iFrameUrl = this.tempUrl!;
      }
    });
  }

  navigateTo(param: string) {
    switch (param) {
      case "back":
        this.router.navigateByUrl("/home");
        break;

      case "site":
        window.open(this.iFrameUrl, "_blank");
        break;
    }
  }
}
