//function 함수

/*
    funtion 함수명(매개변수){
        실행코드;
        return 리턴값;
    }
*/

function func01(){
    console.log("function01()");
}

func01();   //함수호출

const func02 = function(){
    console.log("func02()");
}

func02();   //함수호출  함수명()

const func03 = function func033(){
    console.log("func03()");
}

//func033();  //인식못함..
func03();

//const func04 = func()=> {} 화살표함수..

const func04 = ()=>{
    console.log("func04()");
}

func04();

//

function func05(a, b){
    console.log('func05()' + a + ' ' + b);
}

func05(10, 20);
func05("A", "B");

const func06 = function(a, b){
    console.log('func06()' + a + ' ' + b);
}

const func07 = function func077(a, b){
    console.log('func07()' + a + ' ' + b);
}
func07(10, 20);

const func08 = (i, j)=>{
    console.log('func08()' + i + ' ' + j);
}
func08("Hi", 2000);