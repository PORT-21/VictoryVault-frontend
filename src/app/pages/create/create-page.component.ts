import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'pt-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.http.get<Achivment[]>('./assets/data/countries.json')
    //   .subscribe((data: Country[]) => {
    //     this.achievements = data;
    //   });
    // DefaultService.listAchivments
  }

  back() {
    this.router.navigate(['/achievements'])
  }
}
