import { TimeZone } from './TimeZone';
import { LookUp } from './LookUp';

export class Country{

    countryCode : string;
    countryName : string;
    defaultTimezone : LookUp;
    timeZones : LookUp[];

    constructor(countryCode, countryName,defaultTimezone,  timeZones){
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.defaultTimezone = defaultTimezone;
        this.timeZones = timeZones;

    }
}