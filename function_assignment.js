function printScore(ca1, ca2, exam){
    totalScore = ca1 + ca2 + exam
    breakme: {
    if (ca1 <= 20 && ca2 <= 20 && exam <=60){
        return totalScore
    }
    else if (ca1 <=20 && ca2 > 20 && exam <=60){
        console.log('Ca2 score is Invalid.')
        totalScore = -1
        break breakme
    }
    else if (ca1 <=20 && ca2 > 20 && exam >60){
        console.log('Ca2 and exam scores are invalid')
        totalScore = -1
        break breakme
    }
    else if (ca1 >20 && ca2 <= 20 && exam <= 60){
        console.log('Ca1 score is Invalid.')
        totalScore = -1
        break breakme
    }
    else if (ca1 > 20 && ca2 <=20 && exam >60){
        console.log('Ca1 and exam scores are invalid')
        totalScore = -1
        break breakme
    }
    else if (ca1 <=20 && ca2 <=20 && exam > 60){
        console.log('Exam score is invalid')
        totalScore = -1
        break breakme
    }
    else if (ca1 > 20 && ca2 > 20 && exam > 60){
        console.log('Ca1, Ca2, and exam scores are all wrong scores')
        totalScore = -1
        break breakme
    }
    else{
        console.log('Wrong input, need real score')
        totalScore = -1
        break breakme
    }
}
}

function showScore(total){
    if (totalScore>=68 && totalScore<=100){
        total = 'A'
    }
    else if (totalScore>=58 && totalScore<=67){
        total = 'B'
    }
    else if (totalScore>=48 && totalScore<=57){
        total = 'C'
    }
    else if (totalScore>=38 && totalScore<=47){
        total = 'D'
    }
    else if (totalScore<=37 && totalScore>=0){
        total = 'F'
    }
    else{
        total = 'Value does not exist'
    }
    return total
}

console.log(showScore(printScore(8, 20, 40)))
