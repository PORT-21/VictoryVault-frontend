import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Achivment, DefaultService } from 'api/client'

@Component({
  selector: 'pt-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss'],
})
export class CreatePageComponent implements OnInit {
  description?: string
  title?: string
  fileName?: string
  imgSrc?: string

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

  processTitle($event: any) {
    this.title = $event.target.value
  }

  processDescription($event: any) {
    this.description = $event.target.value
  }

  onFileSelected($event: any) {
    const file: File = $event.target.files[0]
    if (file) {
      console.log(file)
      this.fileName = file.name
      const reader = new FileReader()
      reader.onload = e => this.imgSrc = reader.result as string
      reader.readAsDataURL(file)
    }
  }

  save() {
    DefaultService.createAchivment({
      title: this.title,
      icon_link: this.imgSrc,
      description: this.description,
    }).then(() => this.back())
  }
}
