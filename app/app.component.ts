import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 
    num1 : number = 12;
    hero : String = "Blackey";
    status :  String = "in-mission";
    heroes  = [
        {name:'jack', age:12},
        {name:'sack', age:122},
        {name:'rack', age:32}
        ];

    birthday : Date = new Date(1988, 2, 15); // March 15, 1988
    toggle : Boolean = true; // start with true == shortDate

    get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }

    toggleFormat() { this.toggle = !this.toggle; }

    generateArray(obj){
        return Object.keys(obj).map((key)=>{ return obj[key]});
    }

    addHero(newHero: string,newage : number) {
        if (newHero) {
        this.heroes.push({name:newHero,age:newage});
        }
    }
    

    onClick(){
        console.log(this.newobj.name);
        console.log(this.newobj.schema);

        for(var col in this.newobj.schema){
            console.log("column name"+col);
            console.log("column nameeeee"+this.newobj["schema"][col]["title"]);
        }

        for(var rec in this.newobj.references){
            console.log("record name"+this.newobj["references"][rec]["recordJson"]["coverage_Name"]);

        }

        console.log(this.newsobj.schema.name);

        if(this.hero != undefined){
            this.hero = undefined;
        }else {
           this.hero = "Blackey"; 
        }      
    }

    

        newobj = {  
                    "name":"Coverage Master",
                    "schema":{  
                        "coverage_Name":{  
                            "title":"Coverage Name",
                            "type":"string"
                        },
                        "coverage_Lob":{  
                            "title":"Coverage Lob",
                            "type":"string"
                        }
                    },
                    "references":[  
                        {  
                            "coverageId":1,
                            "recordJson":{  
                                "coverage_Name":"Inpatient Treatment",
                                "coverage_Lob":"Health"
                            }
                        },
                        {  
                            "coverageId":2,
                            "recordJson":{  
                                "coverage_Name":"Post Hospitalization",
                                "coverage_Lob":"Health"
                            }
                        }
                    ],
                    "totalNumberOfRecord":2
                    };
    


    newsobj = {  
                "name":"Coverage Master",
                "schema":[ 
                    {  
                        "name":"coverage_Name",
                        "title":"Coverage Name",
                        "type":"string"
                    },
                    { 
                        "name":"coverage_Lob",
                        "title":"Coverage Lob",
                        "type":"string"
                    }
                ],
                "references":[  
                    {  
                        "coverageId":1,
                        "recordJson":{  
                            "coverage_Name":"Inpatient Treatment",
                            "coverage_Lob":"Health"
                        }
                    },
                    {  
                        "coverageId":2,
                        "recordJson":{  
                            "coverage_Name":"Post Hospitalization",
                            "coverage_Lob":"Health"
                        }
                    }
                ],
                "totalNumberOfReferences":2,
                "orderBy":"coverage_Name"
                };                

}
