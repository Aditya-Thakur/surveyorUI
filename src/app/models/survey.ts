export class Survey {
    _id : string;
    createdBy : string;
    createdOn : Date;
    validTill : Date;
    active : boolean;
    question: question[];
        
}
export class question  {
    questionType : string;
    questionContent : string;
    optionList : string[];
}

