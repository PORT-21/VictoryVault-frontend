import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CreateRoutingModule } from './create-routing.module'
import { CreatePageComponent } from './create-page.component'
import { AchievementModule } from 'src/app/core/achievement/achievement.module'

@NgModule({
  declarations: [
    CreatePageComponent,
  ],
  imports: [
    CommonModule,
    AchievementModule,
    CreateRoutingModule,
  ]
})
export class CreatePageModule { }
