export class TimeZone{
    name : string;
    description : string;
    relativeToGmt : string;

    constructor(name, description, relativeToGmt){
        this.name = name;
        this.description = description;
        this.relativeToGmt = relativeToGmt;
    }
}