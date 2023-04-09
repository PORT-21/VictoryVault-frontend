import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementComponent } from './achievement.component';


@NgModule({
    declarations: [
        AchievementComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AchievementComponent,
    ],
})
export class AchievementModule { }
