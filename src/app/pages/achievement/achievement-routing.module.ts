import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementPageComponent } from './achievement-page.component';

const routes: Routes = [{ path: '', component: AchievementPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AchievementRoutingModule { }
