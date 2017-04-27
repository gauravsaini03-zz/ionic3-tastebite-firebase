import { Component, ViewChild } from '@angular/core';
import { IonicPage, Tabs } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	@ViewChild('myTabs') tabRef: Tabs;

	tab1Root: any = 'HomePage';
  tab2Root: any = 'AddFoodPage';
  tab3Root: any = 'LoginPage';

  constructor() {
  }

  ionChange() {
  	console.log("====")
  }

}
