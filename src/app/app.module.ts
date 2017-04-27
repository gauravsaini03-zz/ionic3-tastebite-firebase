import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Tastebite } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Facebook } from '@ionic-native/facebook';

import { CityProvider } from '../providers/city/city';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDnd6hMcfJDWGdDr6EOSS05NoMM2CeY2bw",
  authDomain: "tastebite-ec5c4.firebaseapp.com",
  databaseURL: "https://tastebite-ec5c4.firebaseio.com",
  storageBucket: "tastebite-ec5c4.appspot.com",
  messagingSenderId: "762350093850"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    Tastebite
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(Tastebite, {
      preloadModules: true
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Tastebite
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    InAppBrowser,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityProvider, AuthServiceProvider
  ]
})
export class AppModule {}
