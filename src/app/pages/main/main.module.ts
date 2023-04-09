import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { HeroModule } from './hero/hero.module';
import { CreateModule } from './create/create.module';
import { LvlModule } from './lvl/lvl.module';
import { TarifsModule } from './tarifs/tarifs.module';
import { WhyModule } from './why/why.module';
import { ShowModule } from './show/show.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeroModule,
    WhyModule,
    ShowModule,
    CreateModule,
    LvlModule,
    TarifsModule,
  ]
})
export class MainModule { }
