import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../Model/user.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  url: string = environment.apiurl;
  constructor(public http: HttpClient) {}

  login = (credentials: any) => {
    return this.http.post(this.url + "UserDetails/Login/", credentials, {});
  };

  signup = (register: user) => {
    return this.http.post(this.url + "UserDetails/register/", register, {});
  };

  GetUserProfile = () => {
    return this.http.get(this.url + "UserProfile/");
  };
  postjob = (data: any) => {
    return this.http.post(this.url + "Jobs", data, {});
  };

  getIP = () => {
    return this.http.get(
      "https://api.ipify.org?format=json&callback=JSONP_CALLBACK"
    );
  };
  getSubjectList = () => {
    return this.http.get(this.url + "Subjects");
  };
}
