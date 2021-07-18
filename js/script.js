"use strict";



function alphabetPosition(text) {
    let alphabet='abcdefghijklmnopqrstuvwxyz';    
    let corrected=text.toLowerCase();
    let result='';


    for(let i=0;i<corrected.length;i++){
        let element=corrected[i];
        let number=alphabet.indexOf(element)+1;
        if(number>0){
            result+= result==''?number:(' '+number);
        }
    }
    return result;
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));