import { Component, ViewChild } from "@angular/core";
import { LoginPage } from "../app/login/login.page";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Nav } from "ionic-angular";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home"
    },
    {
      title: "List",
      url: "/list",
      icon: "list"
    },
    {
      title: "login",
      url: "/login",
      icon: "log-in"
    },
    {
      title: "register",
      url: "/register",
      icon: "person-add"
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
