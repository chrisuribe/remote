import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  
    public year: number = -1;
    public month: number = -1;


   ngOnInit(): void {
    let params = this.route.snapshot.paramMap;
    this.year = Number(params.get('year'));
    this.month = Number(params.get('month'));

    // another way to do it...
    // this.route.params.subscribe(data => {
    //   this.year = data.year;
    //   this.month = data.month;
    // });
   }
  
  viewAll() {
    this.router.navigate(['/']);
  }

}
