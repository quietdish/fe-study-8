// 반복문...

//javascript [] 배열

let scores = [10, 20, 30, 50];

console.log(scores);    //배열 그냥 출력해줌..

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

//for in
for(let i in scores){
    console.log( i + " " + scores[i] );
}

//for of 향상된for문?
for(let value of scores){
    console.log(value);
}

//forEach (for in 이랑 출력결과 같음..)

scores.forEach( (value, index)=> { 
    console.log( index + " " + value);
})