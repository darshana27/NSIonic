import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(public api: ApiService) {}
  ngOnInit() {
    var access_token = JSON.stringify(localStorage.getItem("access_token"));
    console.log("Access Token : ", access_token);

    let headers = new HttpHeaders({
      access_token: access_token
    });
    // let headers = new HttpHeaders();
    // headers = headers.append("access_token", access_token);
    // console.log("***********", headers);
    this.api.fetchApi(
      "http://staging.php-dev.in:8844/trainingapp/api/users/getUserData",
      "GET",
      null,
      headers,
      this.callback
    );
  }

  callback = response => {
    console.log("Callback response: ", response.data);
  };
}
