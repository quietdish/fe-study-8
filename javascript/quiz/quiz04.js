const personInfo = {
    name: "홍길동",
    age: 25,
    phone: "010-1234-5678",
    engName: "John Smith",
    nickname: " 복습마왕 "
}

console.log('변경 전');
console.log(personInfo);

personInfo.engName = /* 코딩 */ personInfo.engName.toUpperCase();
personInfo.nickname = /* 코딩 */ personInfo.nickname.trim();
personInfo.phone = /* 코딩 */ personInfo.phone.split('-');

// console.log(personInfo.engName.toUpperCase());
// console.log(personInfo.phone.split("-"));

console.log('변경 후');
console.log(personInfo);
