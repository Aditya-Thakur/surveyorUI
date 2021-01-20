export class Response {
    surveyId : string;
    submittedOn : Date;
    answer: answer[];
}
export class answer  {
    _id : string;
    questionId : string;
    questionType : string;
    userResponse : string;
    optionList : string[];
}