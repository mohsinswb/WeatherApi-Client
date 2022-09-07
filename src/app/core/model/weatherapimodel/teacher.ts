export interface Teacher{
     Id? : number;
    Name? : string;
    gender? : string;
    phone? : number;
    gmail? : string;
    Image? :string;
    designation? :string;
    description? :string;
    salary? : string;
    takeClasses?:TakeClasses;
}

export interface TakeClasses{

    id? : number;
    location? : string;
    periodtime? : string;
    subject? : string;
    teacherId? : number;
    teacher : Teacher;

}