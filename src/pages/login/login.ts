import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AngularFire } from 'angularfire2';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	private displayName;

  constructor(
  	public navCtrl: NavController, 
  	private _auth: AuthServiceProvider,
    public af:AngularFire) {
  }

  login() {
    this._auth.signInWithFacebook()
      .then(() => this.onSignInSuccess());
  }

  logout() {
     this._auth.signOut();
     this.displayName = "";
  }

  private onSignInSuccess(): void {
    console.log(this._auth.authData());
    // const itemObservable = this.af.database.object('/users/'+this._auth.authData().uid);
    // itemObservable.set({ name: this._auth.authData()});
  	this.displayName = this._auth.authData().displayName;
  }

}
