import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),

  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./pages/create/create.module').then((m) => m.CreatePageModule),
  },
  {
    path: 'achievements',
    loadChildren: () =>
      import('./pages/achievement/achievement.module').then((m) => m.AchievementPageModule),
  },
];

const options: ExtraOptions = {
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
