/* 출력결과가 알맞게 나오도록 코드를 추가하세요.

조건1. :// 형식이 없으면 경로가 잘못되었습니다.
조건2. https로 접속시 secure가 추가됨
조건3. http 로 접속시 open이 추가됨
조건4. http 접속, https 접속 모두 https 경로로 변경되어 출력됨
*/

//base code

let strUrl1 = "https://human.or.kr";
let strUrl2 = "http://human.or.kr";
let strUrl3 = "http.human.or.kr";

/* {코딩부분} */

function changeLink(url){

    // console.log(url.includes("://"));   //true false
    // console.log(url.indexOf("://"));    //4 5 -1

    // if(url.includes("://")){

    // }

    // 주소 필터링
    if(url.includes("://") == false){
        return "경로가 잘못되었습니다.";
    }

    // 정상 작업 시작

    // https -> secure      https://secure
    // http -> open         https://open

    // people.or.kr -> https://secure.people.or.kr

    // console.log( url.indexOf("://"));                       //4
    // console.log( url.substring(url.indexOf("://")));        ////human.or.kr
    // console.log( url.substring(url.indexOf("://") + 3 ));   //human.or.kr

    let splitStr = url.split("://");

    // console.log(splitStr[0]);
    // console.log(splitStr[1]);

    if(splitStr[0] == 'https'){
        //return splitStr[0] + "://secure." + splitStr[1];
        return "https://secure." + splitStr[1]; //https://secure.human.or.kr
    } else { //http
        return "https://open." + splitStr[1];   //https://open.human.or.kr
    }
}

/* 조건1. :// 형식이 없으면 경로가 잘못되었습니다.
조건2. https로 접속시 secure가 추가됨
조건3. http 로 접속시 open이 추가됨
조건4. http 접속, https 접속 모두 https 경로로 변경되어 출력됨
*/

console.log(changeLink(strUrl1));
console.log(changeLink(strUrl2));
console.log(changeLink(strUrl3));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
console.log("ㅡㅡㅡㅡㅡㅡㅡtestㅡㅡㅡㅡㅡㅡㅡ");
/* 테스트 ~ */
console.log(changeLink("http://test.ac.kr"));
console.log(changeLink("http://samplesiteurl.co.kr"));
console.log(changeLink("https://test.ac.kr"));
console.log(changeLink("https://weather.ac.kr"));
console.log(changeLink("https://today.com"));

// console.log(strUrl1);
// console.log(strUrl2);
// console.log(strUrl3);

// let changeLink = "secure.";
// let changeLink = "open.";

//console.log( changeLink + strUrl2((8)));


//console.log(strUrl2.substring(0, 8) + changeLink );