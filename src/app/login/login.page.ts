import { Component, OnInit, ViewChild } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { RegisterPage } from "../register/register.page";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(
    private router: Router,
    public alertController: AlertController,
    public api: ApiService
  ) {}
  uname: string;
  password: string;
  ngOnInit() {}

  onLogin() {
    let formData = new FormData();
    // formData.append("email", this.uname);
    // formData.append("password", this.password);

    formData.append("email", "darshana.deshpande@neosofttech.com");
    formData.append("password", "Darshana@123");

    console.log("FormData : ", formData);
    this.api.fetchApi(
      "http://staging.php-dev.in:8844/trainingapp/api/users/login",
      "POST",
      formData,
      null,
      this.callback
    );
    // if (this.uname == "Darshana" && this.password == "dvdvd") {
    //   this.router.navigateByUrl("/home");
    // } else {
    //   this.invalidAlert();
    // }
  }
  callback = response => {
    console.log(
      "Callback response: ",
      response.data,
      response.data.access_token
    );
    if (response.status == 200) {
      localStorage.setItem("access_token", response.data.access_token);
      this.router.navigateByUrl("/home");
    } else {
      this.invalidAlert();
    }
  };

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
