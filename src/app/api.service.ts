import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Platform } from "ionic-angular";
import { Device } from "@ionic-native/device/ngx";
// import { HTTP } from "@ionic-native/http/ngx";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  res: any;
  constructor(
    public http: HttpClient,
    public platform: Platform,
    public device: Device // private httpAndroid: HTTP
  ) {
    // console.log(this.device.platform);
  }

  fetchApi(url, method, body, headers, callback) {
    console.log("Function Called!", url, method, body, headers);
    if (method == "get" || method == "GET") {
      return this.http
        .get(url, headers != null ? headers : null)
        .toPromise()
        .then(response => {
          this.res = response;
          console.log("this.res : ", this.res);
          return callback != null ? callback(response) : response;
        })
        .catch(err => {
          console.log("Service Error : ", err);
          return callback(err);
        });
    } else {
      console.log("Api    :    ", body);
      return this.http
        .post(url, body, headers != null ? headers : {})
        .toPromise()

        .then(response => {
          this.res = response;
          console.log("this.res : ", this.res);
          return callback != null ? callback(response) : response;
        })
        .catch(err => {
          console.log("Service Error : ", err);
          return callback(err);
        });
    }
  }
}
