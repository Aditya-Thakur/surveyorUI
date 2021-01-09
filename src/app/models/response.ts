export class Response {
    surveyId : string;
    submittedOn : Date;
    answer: answer[];
}
export class answer  {
    questionType : string;
    userResponse : string;
    optionList : option[];
}

export class option {
    value: string;
}