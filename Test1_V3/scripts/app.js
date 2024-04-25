function choosePercent(letter){
    if(letter == "A"){
        return "90% - 100%";
    }if(letter == "B"){
        return "80% - 89%";
    }if(letter == "C"){
        return "70% - 79%";
    }if(letter == "D"){
        return "65% - 69%";
    }if(letter == "F"){
        return "Below 65%";
    }
}

function chooseScale(scale){
    if(scale == "A"){
        return "3.7 - 4.0";
    }if(scale == "B"){
        return "2.7 - 3.3";
    }if(scale == "C"){
        return "1.7 - 2.3";
    }if(scale == "D"){
        return "1.0 - 1.3";
    }if(scale == "F"){
        return "0";
    }
}

document.getElementById("btnConvert").addEventListener("click",function(){
    
    //get inputs
    let grade = document.getElementById("cboGrade").value;
    let type = document.querySelector("input[name=radType]:checked").value;
     
    let grading = chooseScale(grade);
    let percentage = choosePercent(grade);
   
    if (grade == "0"){
        alert(`Select a letter grade`);
    }else if(type == "percent"){
        alert(`The grade ${grade} converts to ${percentage} as a percent.`);
    }else if (type == "scale"){
        alert(`The grade ${grade} converts to ${grading} as a scale.`);
    }

});
