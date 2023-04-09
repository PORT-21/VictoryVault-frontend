import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { AchievementModule } from 'src/app/core/achievement/achievement.module';

@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    AchievementModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
