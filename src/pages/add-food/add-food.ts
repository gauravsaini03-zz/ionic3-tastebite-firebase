import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { CityProvider } from '../../providers/city/city'
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'

/**
 * Generated class for the AddFoodPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-food',
  templateUrl: 'add-food.html',
})
export class AddFoodPage {
	
	data: {name?: string, city?: string, image?: string} = {};
	imageURL: string;
	foodItems: FirebaseListObservable<any[]>;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public af:AngularFire,
  	public cityService: CityProvider,
    public authService: AuthServiceProvider,
  	public camera: Camera) {

  	this.foodItems = af.database.list('/foodItems');

  	this.cityService.getCityName().then(result => {
  		console.log(result)
  		let cityName = result[0]['address_components'][3].long_name;
      this.data.city = cityName;
    })

  }

  captureImage() {
  	const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imageURL = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }

  save() {
  	let storageRef = firebase.storage().ref();
    // Create a timestamp as filename
    const filename = Math.floor(Date.now() / 1000);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child('images/hello.jpg');
    storageRef.putString(this.imageURL, 'data_url').then(function(snapshot) {
      console.log('Uploaded a data_url string!', snapshot);
    });
   // 	let image       : string  = 'movie-' + new Date().getTime() + '.jpg',
	  // storageRef       = firebase.storage().ref('images/' + image);
	  // let parseUpload = storageRef.putString(this.imageURL, 'data_url');
    
	  // parseUpload.on('state_changed', (_snapshot) => {
        // We could log the progress here IF necessary
        // console.log('snapshot progess ' + _snapshot);
    // },
    // (_err) =>
    // {
    //   reject(_err);
    // },
    // 	(success) =>
    // {
    		// this.data.image = this.imageURL;
    		// this.data.code = this.data.name+"_"+this.data.city;
    		// this.foodItems.push(this.data);
      //   console.log(parseUpload.snapshot);
    // });

    // imageRef.putString(this.imageURL, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
    	// console.log(snapshot);

    	this.data.image = "this.imageURL";
      let url = "foodItems/" + this.makeid();
      firebase.database().ref().child(url).set(this.data);
      // this generates $key automatically
	  	// this.foodItems.push(this.data);
      this.data = "";
    // });
  	
  }

  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 8; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }


}
