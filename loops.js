// NO 1
// Find the first 10 natural numbers
for(let i = 1; i<11; i++){
    console.log(i)
}


// NO 2
// Find the sum of the first 10 natural numbers
sum = 0
for(let i = 1; i<11; i++){
    sum = sum + i
    console.log(`${i} is the number and this is the sum ${sum}`)
}


// NO 3
// Find the sum of the given natural numbers
i = 7
var sum = 0
for(let i = 1; i<8; i++){
    sum = sum + i
    console.log(sum)
}


// NO 4
// Find the sum of 10 numbers and their average
sum = 0
i = 10
for(let i = 1; i<11; i++){
    sum = sum + i
    console.log(`${i} is the number and this is the sum ${sum}`)
    if (i===10){
        avg = sum / 10
        console.log(`The average of the added numbers are ${avg}`)
    }
}


// NO 5
// Find the cube of numbers of the given integer
i = 5
for(let i = 1; i<6; i++){
    cube = i * i * i
    console.log(`${i} and cube of the 1 is: ${cube}`)
}