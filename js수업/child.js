//부모창에 입력한 이름을 가져와서 자식창의 input태그에 넣기
//새창을 열러준 부모창(메인창)은 window.opener이다.
let parentName = window.opener.document.getElementById("name");

//자식의 input 태그 가져오기
let childName = document.getElementById("childName");

childName.value = parentName.value;

//이메일을 클릭하면 부모창의 input태그에 넣기

let list = document.querySelectorAll(".emailText");
//for문 함수   일회용 함수 한번만 할시엔 일회용으로 편함
list.forEach( text => { text.addEventListener('click',() => {
   let parentEmail= window.opener.document.getElementById("email");
    parentEmail.value = text.innerText;
    window.close();
})} );
// 여러 개를 할꺼면 밑에껄로 추천
// function a(text){
//     text.addEventListener('click',function(){

//     });
// }