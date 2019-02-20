import { RatingComponent } from "../components/rating/rating.component";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ApiService } from "../api.service";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  products: any;
  res: Observable<any>;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public httpClient: HttpClient, public api: ApiService) {}

  ngOnInit() {
    let headers = new HttpHeaders({
      "Content-Type": "application/text"
    });
    console.log("***********", headers);
    this.api.fetchApi(
      "http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=1",
      "GET",
      null,
      headers,
      this.callback
    );
  }
  callback = response => {
    console.log("Callback response: ", response.data);
    this.products = response.data;
  };
}

// this.products = this.httpClient.get(
//   "http://staging.php-dev.in:8844/trainingapp/api/products/getList?product_category_id=1",
//   { responseType: "text", headers }
// );
// this.products.subscribe(data => {
//   console.log(JSON.parse(data));
//   this.res = JSON.parse(data);
// });
