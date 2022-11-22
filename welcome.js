
    let score=document.getElementById("grade")
  

function grade(){
    if (score.value >= 70 && score.value <= 100){
    document.getElementById('getname').innerHTML="Grade A"
    }

    if(score.value >= 60 && score.value <= 69 ){
        document.getElementById('getname').innerHTML="Grade B"
    }
    if(score.value >=50 && score.value <= 59){
        document.getElementById('getname').innerHTML="Grade C"
    }
    if(score.value >=40 && score.value <= 49){
        document.getElementById('getname').innerHTML="Grade D"
    }
    if(score.value >= 0 && score.value <=39){
        document.getElementById('getname').innerHTML="Grade F"

    }
    if (score.value <=0 && score.value){
        document.getElementById('getname').innerHTML="invalid"
    }

}

// if score.value >= 70 && score <= 100){
//     // windows(alert)
        
//     console.log("A1")
//     }
//     else if ( score >= 60 && score <= 69){
//         console.log("B2")
//     }
//     else if ( score >= 50 && score <= 59){
//         console.log("C3")
//     }
//     else if ( score > 45 && score <= 49){
//         console.log("C4")
//     }
//     else if ( score >= 40 && score <= 45){
//         console.log("D7")
//     }
//     else if ( score >= 0 && score <= 39){
//         console.log("F9")