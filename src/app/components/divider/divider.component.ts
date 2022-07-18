import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-divider",
  template: ` <mat-divider></mat-divider> `,
  styles: [
    `
      .mat-divider {
        margin-bottom: 1rem;
      }
    `,
  ],
})
export class DividerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
