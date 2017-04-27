import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

/**
 * Generated class for the RateFoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-rate-food',
  templateUrl: 'rate-food.html',
})
export class RateFoodPage {
	
	rateItems: FirebaseListObservable<any[]>;
	data: {name?: string, review?: string, rating?: any} = {};
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public af: AngularFire) {

  	this.rateItems = af.database.list('/rateItems');
  	console.log(this.navParams.data);
  	this.data.name = this.navParams.data.name;
  }

  rate() {
  	let data = {
  		"rating": this.data.rating,
  		"review": this.data.review
  	}
  	let url = "rateItems/" + this.navParams.data.$key + "/" + this.makeid();
  	firebase.database().ref().child(url).set(data);
  	this.navCtrl.pop();
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
