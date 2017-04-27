import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RateFoodPage } from './rate-food';

@NgModule({
  declarations: [
    RateFoodPage,
  ],
  imports: [
    IonicPageModule.forChild(RateFoodPage),
  ],
  exports: [
    RateFoodPage
  ]
})
export class RateFoodPageModule {}
