export class Survey {
    createdBy : string;
    createdOn : Date;
    validTill : Date;
    active : boolean;
    question: question[];
        
}
export class question  {
    questionType : string;
    questionContent : string;
    optionList : option[];
}

export class option {
    value: string;
}
