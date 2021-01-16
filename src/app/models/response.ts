export class Response {
    surveyId : string;
    submittedOn : Date;
    answer: answer[];
}
export class answer  {
    questionType : string;
    userResponse : string;
    optionList : string[];
}