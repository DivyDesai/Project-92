var player1_score=0;
var player2_score=0;
var questionTurn="player1_name";
var answerTurn="player2_name";
player1=localStorage.getItem("player1_name");
player2=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=player1+" : ";
document.getElementById("player2_name").innerHTML=player2+" : ";
document.getElementById("player1_score").innerHTML=player1Score;
document.getElementById("player2_score").innerHTML=player2Score;
document.getElementById("player_question").innerHTML="Question Turn : "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2;

function send(){
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualAns=parseInt(number1)*parseInt(number2);
     
    question_number="<h4>"+number1+"X"+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br>button class='btn btn_info' onclick='check()'>Check</button>"
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer==actual_answer){
        if(answer_turn=="player1"){
            update_player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=update_player1_score;
        }
        else{
            update_player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=update_player2_score;
        }
    }
    if(questionTurn=="player1"){
        questionTurn="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+player2_name;
    }
    else{
        questionTurn="player1";
        document.getElementById("player_question").innerHTML="Question turn:"+player1_name;
    }
    if(answerTurn=="player1"){
        answerTurn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player2_name;
    }
    else{
        answerTurn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn:"+player1_name;
    }
}