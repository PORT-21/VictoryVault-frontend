import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AchievementRoutingModule } from './achievement-routing.module'
import { AchievementPageComponent } from './achievement-page.component'
import { AchievementModule } from 'src/app/core/achievement/achievement.module'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter'

@NgModule({
  declarations: [
    AchievementPageComponent,
  ],
  imports: [
    CommonModule,
    AchievementModule,
    AchievementRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ]
})
export class AchievementPageModule { }
