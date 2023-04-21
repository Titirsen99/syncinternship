var skip = document.getElementById("skip");
var score = document.getElementById("score");
var totalScore = document.getElementById("totalScore");
var countDown = document.getElementById("countDown");

var count = 0;
var scoreCount = 0;
var duration = 0;

var qaset = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click',function(){
    step();
})

function step(){
    count+=1;
    for(var i=0;i<qaset.length; i++){
        qaset[i].className='qa_set';
        
    }
    qaset[count].className='qa_set active';
    if(count == 5){
        skip.style.display = 'none';
    }
}