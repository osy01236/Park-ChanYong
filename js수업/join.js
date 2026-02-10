// 스크립트의 위치가 body 태그 위에 있는경우에
// 태그를 가져와서 사용해야한다면
//반드시 window가 load 한다음에
// 태그 가져오기를 해야 한다.

window.onload=function(){
    //가입 버튼 클릭시
    //필수 정보가 모드 입력되었는가 확인하기
    //비밀번호 와 비밀번호확인이 일치하는가
    // let id = document.getElementById("userId");
    // let pw = document.getElementById("userPw");
    // let pw2 = document.getElementById("userPwRe");
    // let name = document.getElementById("name");
    // let tel = document.getElementById("tel");
    
    // id.addEventListener("keyup", joinCheck)
    // pw.addEventListener("keyup",joinCheck)
    // pw2.addEventListener("keyup",joinCheck)
    // name.addEventListener("keyup",joinCheck)
    // tel.addEventListener("keyup",joinCheck)    

    //클랙스명으로 태그 가져와서 이벤트 등록하기
    const 필수입력 = document.getElementsByClassName("essential");

    for(var input of 필수입력){
        input.addEventListener("keyup", joinCheck);
    }

    // let id= document.querySelector("input");

    // const input = document.querySelectorAll(".essential");


    // for( var i = 0 ; i<5; i++ )
    // for( var i in 필수입력 )
    // for( var data of 필수입력 )    



}

//만약에 이름을 입력안했을 경우에 사용자에게
//알려주고 싶다면 지금과 같은 방식은 어렵다(불가능은 아님)
//지금의 방식은 누구를 입력안했다라고 표현하는게 아니고 모드 입력했냐 안했냐만 확인하기


function joinCheck(){
    let id = document.getElementById("userId");
    let pw = document.getElementById("userPw");
    let pw2 = document.getElementById("userPwRe");
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");

    var count=0;
    if(id.value != '') count++;
    if(pw.value != '') count++;
    if(pw2.value != '') count++;
    if(name.value != '') count++;
    if(tel.value != '') count++;

    if(count ==5){ //필수 입력 모드 했다
        document.getElementById("joinBt").disabled=false;
        alert("비밀번호를 다시 확인해주세요");
        pw.value=''; //비밀번호 input값 비우기
        pw2.value=''; //비밀번호 확인 input 값 비우기
//    }else{ //필수입력중 하나이상 입력안함
        document.getElementById("joinBt").disabled=true;

    }

}
