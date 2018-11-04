import { Speler } from "./speler";

export class Match {
    uid: String;
    tegenstander: String;
    matchKey: String;
    lengte: Number;
    beginSelectie: Speler[];
    doelpunten: Array<Object>;
    tegenDoelpunten: Array<object>
    thuis: Boolean;
    tijd;
    constructor(){
        this.uid = "";
        this.tegenstander = "";
        this.matchKey = "";
        this.lengte = 60;
        this.beginSelectie = [];
        this.doelpunten = [];
        this.tegenDoelpunten = [];
        this.thuis = true;
        this.tijd = 0;
        
    }

}
