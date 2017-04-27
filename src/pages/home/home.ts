import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable }  from 'angularfire2';
import { CityProvider } from '../../providers/city/city'

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

	foodItems: FirebaseListObservable<any[]>;
  item;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public cityService: CityProvider,
  	public af:AngularFire) {

    this.cityService.getCityName().then(result => {
      let cityName = result[0]['address_components'][3].long_name;
      this.foodItems = af.database.list('/foodItems', {
        query: {
          orderByChild: 'city',
          equalTo: cityName 
        }
      });
    })
  }

  ratingPage(data:any) {
    console.log(data);
    this.navCtrl.push("FoodRatingPage", data);
  }

}
