import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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
  studentGraph=(stID:any)=>{
    return this.http.get(
      this.url + `ParticipateQuiz/studentGraph/${stID}`
    );
  }
}
