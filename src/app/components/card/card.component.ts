import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() image!: string;
  @Input() content!: string;
  @Input() tech!: string[];
  @Input() title!: string;
  @Input() frontend!: string | undefined;
  @Input() backend!: string | undefined;
  @Input() subtitle!: string;
  web!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(pag: string) {
    console.log("pag", pag);

    this.router.navigate(["/view", pag]);
  }
  goToCode(event: Event) {
    console.log(event.target);
  }
}
