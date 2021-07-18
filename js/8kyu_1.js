"use strict";
function mutliTable(number){
    const baseArray=[1,2,3,4,5,6,7,8,9,10];

    let result='';
    baseArray.forEach((baseValue)=>{
        let promRes=baseValue*number;
        if(result!=''){
            result+='/n';
        }
        result+=`${baseValue} * ${number} = ${promRes}`;
    } );
    return result;
}

function testArray(){
    const baseArray1=[1,2,3,4,5,6,7,8,9,10];
    baseArray1.forEach((baseValue)=>{
        console.log(baseValue);
    });
}

console.log(mutliTable(4));
//console.log(mutliTable(7));

testArray();


