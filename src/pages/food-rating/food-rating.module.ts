import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodRatingPage } from './food-rating';

@NgModule({
  declarations: [
    FoodRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodRatingPage),
  ],
  exports: [
    FoodRatingPage
  ]
})
export class FoodRatingPageModule {}
