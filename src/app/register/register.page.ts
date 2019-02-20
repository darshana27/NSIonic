import { Component, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { ApiService } from "../api.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  constructor(private router: Router, public api: ApiService) {}
  fname: string;
  lname: string;
  email: string;
  password: string;
  cpassword: string;
  gender: string;
  phone: string;

  ngOnInit() {}

  goBack() {
    this.router.navigateByUrl("/login");
  }

  onRegister() {
    let data = {
      first_name: "Darshana",
      last_name: "Deshpande",
      email: "darshana.deshpande@neosofttech.com",
      password: "Darshana@123",
      confirm_password: "Darshana@123",
      gender: "Female",
      phone_no: "1234567899"
    };
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    var formData = new FormData();
    formData.append("first_name", this.fname);
    formData.append("last_name", this.lname);
    formData.append("email", this.email);
    formData.append("password", this.password);
    formData.append("confirm_password", this.cpassword);
    formData.append("gender", this.gender);
    formData.append("phone_no", this.phone);
    // let formData = new FormData();
    // formData.append("first_name", "Darshana");
    // formData.append("last_name", "Deshpande");
    // formData.append("email", "darshana.deshpande@neosofttech.com");
    // formData.append("password", "Darshana@123");
    // formData.append("confirm_password", "Darshana@123");
    // formData.append("gender", "Female");
    // formData.append("phone_no", "7894561233");
    // let body = new HttpParams();
    // body = body.set("first_name", this.fname);
    // body = body.set("last_name", this.lname);
    // body = body.set("email", this.email);
    // body = body.set("password", this.password);
    // body = body.set("confirm_password", this.cpassword);
    // body = body.set("gender", this.gender);
    // body = body.set("phone_no", this.phone);
    console.log("FormData : ", formData);
    this.api.fetchApi(
      "http://staging.php-dev.in:8844/trainingapp/api/users/register",
      "POST",
      formData,
      null,
      this.callback
    );
  }
  callback = response => {
    console.log("Callback response: ", response.data);
  };
}
