import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Geolocation } from '@ionic-native/geolocation';


@Injectable()
export class CityProvider {

  constructor(public http: Http, private geolocation: Geolocation) {
    console.log('Hello CityProvider Provider');
  }

  getCityName() {
  	return new Promise(resolve => {
  		this.geolocation.getCurrentPosition().then((resp) => {
	    	let url = "http://maps.googleapis.com/maps/api/geocode/json?latlng="+resp.coords.latitude+","+resp.coords.longitude
				this.http.get(url).map(res => res.json()).subscribe(data => {
					resolve(data.results);
				});
			}).catch((error) => {
			  console.log('Error getting location', error);
			});
  	})

    
  }

}
