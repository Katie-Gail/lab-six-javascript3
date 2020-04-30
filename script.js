let scores = [
    {
        name : "Jane",
        score : 95,
        date : "2020-01-24",
        passed : true 
    },
    {   name : "Joe",
        score : 77,
        date : "2018-05-14",
        passed : true 
    },
    {   name : "Joe",
        score : 77,
        date : "2018-05-14",
        passed : true 
    },
    {   name : "Jack",
        score : 59,
        date : "2019-07-05",
        passed : false
    },
    {   name : "Jill",
        score : 88,
        date : "2020-04-22",
        passed : true 
    }
]
console.log(scores);

const addScore = (array,newName,newScore,newDate) => {
    let newStudent = {
        name : newName,
        score : newScore,
        date : newDate,
        passed : newScore >= 60
    }
     array.push(newStudent);
}
addScore(scores,"Katie",50,"2020-04-29")

const deleteScoreByIndex = (array,index) => {
    array.splice(index,1)
};   


const deleteScoreByName = (name, array) => {
    const indexToRemove = array.findIndex((element) => {
        return element.name === name ;
    });
    array.splice(indexToRemove,1);
};
console.log(deleteScoreByName("Jill",scores));


const editScore = (array, index, score) => {
    let passed = null;
    if (score >= 60) {
        passed = true; 
    }else {
        passed = false;
    }
    array[index].score = score;
    array[index].passed = passed;
};
editScore(scores,0,50);
console.log(scores);


const findScoreByName = (array,name) => {
    return array.find((scoreElement) => scoreElement.name === name);
}
console.log(findScoreByName(scores,"Jill"));


const findLowestScore = (array) => {
    let currentLowestScore = array[0];
    array.forEach((scoreElement) => {
        if(scoreElement.score < currentLowestScore.score) {
            currentLowestScore = scoreElement;
        }
    })
    return currentLowestScore;
};
console.log(findLowestScore(scores));

const findAverageQuizScore = (array) => {
    let currentTotal = 0;
    for(let scoreElement of array) {
        currentTotal += scoreElement.score;
    } 
    return currentTotal/array.length;
};
console.log(findAverageQuizScore(scores));



// const filterScores = (array,property, value) => {
//     return array.filter((object) => {
//         return object[property] === value;
//     })
// }


const sortScoresAsc = (array) => {
    return array.sort((object)=> {

    });
}