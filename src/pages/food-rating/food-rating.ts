import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

/**
 * Generated class for the FoodRatingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food-rating',
  templateUrl: 'food-rating.html',
})
export class FoodRatingPage {
	item:any;
	ratings:any;
	foodRatings: FirebaseListObservable<any[]>;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public af: AngularFire) {

  	this.item = this.navParams.data;
  	this.foodRatings = af.database.list('/rateItems/'+this.navParams.data.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodRatingPage');
  }

  ratingPage() {
    this.navCtrl.push("RateFoodPage", this.navParams.data);
  }

}
