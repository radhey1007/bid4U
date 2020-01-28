import { Injectable } from "@angular/core";
import { Observable, forkJoin } from "rxjs";
import { user } from "../Model/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  getcontentPage = () => {
    return this.http.get(this.url + "PageContentUploads/ContentType");
    //http://localhost:54462/api/PageContentUploads/ContentType
  };
  PoastQuiz = data => {
    return this.http.post(this.url + "Quizs", data, {});
  };
  postMaterial = (data, label) => {
    return this.http.post(
      this.url + `StudyMaterials?_studyMaterial=${label}`,
      data
    );
  };
  postGK = data => {
    return this.http.post(this.url + `CurrentAffairs`, data);
  };
  getJobData = () => {
    return this.http.get(this.url + `Jobs`);
  };
  getCurrentAffairs = () => {
    return this.http.get(this.url + `CurrentAffairs/LatestCurrentAffairs`);
  };

  MultipleResourceJoin = () : Observable<any> => {
    const response1 = this.getJobData();
    const response2 = this.getCurrentAffairs();
    return forkJoin([response1, response2]);
  };

  getQuizList = data => {
    return this.http.post(this.url + `ParticipateQuiz/StartQuiz`, data);
  };
  getQuizListbyid = qID => {
    return this.http.get(this.url + `ParticipateQuiz/QuistionList/${qID}`);
  };
  GetQuizseries = (SID: any) => {
    return this.http.get(this.url + `QuizMasters/SujectQuizTittle/${SID}`);
  };
  QuestionwiseAnswerSubmit = (question: any) => {
    return this.http.post(
      this.url + `ParticipateQuiz/Answer/${question.QuizID}/${question.answer}`,
      {}
    );
  };
  updateTimebyAnswer = (QuizTime: any) => {
    return this.http.post(
      this.url +
        `ParticipateQuiz/UpdateTime/${QuizTime.sessionID}/${QuizTime.updatetime}`,
      {}
    );
  };
  finalSubmit = sessionID => {
    return this.http.get(
      this.url + `ParticipateQuiz/PrticipateQuiz/${sessionID}`
    );
  };
  completeQuizExam = (QuizTime: any) => {
    return this.http.post(
      this.url +
        `ParticipateQuiz/CompleteQuiz/${QuizTime.sessionID}/${QuizTime.updatetime}`,
      {}
    );
  };

  getMatrialList = () => {
    return this.http.get(this.url + `StudyMaterials`);
  };
  sendOtp = (userName: string) => {
    return this.http.post(
      this.url + `UserDetails/ChangePasswordReqest/${userName}`,
      {}
    );
  };
  changePassword = (data: any) => {
    return this.http.post(this.url + `UserDetails/ChangePassword/`, data);
  };
  studentGraph = (data: any) => {
    return this.http.post(this.url + `ParticipateQuiz/studentGraph/`, data);
  };
  subject = (data: any) => {
    return this.http.post(this.url + `Subjects`, data);
  };
  series = (data: any) => {
    return this.http.post(this.url + "QuizMasters", data);
  };
  content = (data: any) => {
    return this.http.post(this.url + "PageContentUploads/", data);
  };
  GetQuizseriesst = (SID: any, stuID: any) => {
    return this.http.get(
      this.url + `ParticipateQuiz/TestSeriesLists/${stuID}/${SID}`
    );
  };
  //for upload content :- http://localhost:54462/api/PageContentUploads/
}
