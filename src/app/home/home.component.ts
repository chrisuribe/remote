import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

    year: number = -1;
    month: number = -1;

  ngOnInit(): void {
      let params = this.route.snapshot.paramMap;
      this.year = Number(params.get('year'));
      this.month = Number(params.get('month'));

  }

  archives =
  [
    {"year": 2017, "month": 1},
    {"year": 2017, "month": 2},
    {"year": 2017, "month": 3}
  ]

}
