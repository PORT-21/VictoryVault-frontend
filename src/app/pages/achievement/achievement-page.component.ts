import { Component, OnInit } from '@angular/core'
import { Achivment } from 'api/client'
import { Router } from '@angular/router'

@Component({
  selector: 'pt-achievement-page',
  templateUrl: './achievement-page.component.html',
  styleUrls: ['./achievement-page.component.scss'],
})
export class AchievementPageComponent implements OnInit {
  searchTerm = '';
  achievements: Achivment[] = [];
  term = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.http.get<Achivment[]>('./assets/data/countries.json')
    //   .subscribe((data: Country[]) => {
    //     this.achievements = data;
    //   });
    // DefaultService.listAchivments
  }

  createNew() {
    this.router.navigate(['/create'])
  }
}
