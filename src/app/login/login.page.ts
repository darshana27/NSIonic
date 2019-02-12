import { Component, OnInit, ViewChild } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { RegisterPage } from "../register/register.page";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    public alertController: AlertController
  ) {}
  uname: string;
  password: string;
  ngOnInit() {}

  onLogin() {
    console.log(this.uname, this.password);
    if (this.uname == "Darshana" && this.password == "dvdvd") {
      this.router.navigateByUrl("/home");
    } else {
      this.invalidAlert();
    }
  }

  onRegister() {
    console.log("onRegister");
    this.router.navigateByUrl("/register");
  }

  async invalidAlert() {
    const alert = await this.alertController.create({
      header: "Invalid Credentials.",
      message: "Invalid username or password.",
      buttons: ["OK"]
    });
    return await alert.present();
  }
}
