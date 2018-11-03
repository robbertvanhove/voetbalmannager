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
    

}
