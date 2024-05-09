// JavaScript
    function submitQuiz() {
    var score = 0;
  
    // ตรวจสอบคำตอบและเพิ่มคะแนน
    var q1Answer = document.querySelector('input[name="q1"]:checked').value;
    var q2Answer = document.querySelector('input[name="q2"]:checked').value;
    var q3Answer = document.querySelector('input[name="q3"]:checked').value;
  
    // ตรวจสอบคำตอบและไฮไลท์คำตอบที่ถูกต้อง
    checkAnswer(q1Answer, 'q1');
    checkAnswer(q2Answer, 'q2');
    checkAnswer(q3Answer, 'q3');
  
    function checkAnswer(answer, questionNumber) {
      var correctAnswer = 'a'; // กำหนดคำตอบที่ถูกต้อง
      var question = document.getElementsByName(questionNumber)[0].parentNode;
  
      if (answer === correctAnswer) {
        score++;
        question.classList.add('correct');
      } else {
        question.classList.add('incorrect');
      }
    }
  
    // แสดงผลลัพธ์
    var result = "คะแนนของคุณคือ " + score + "/3";
    document.getElementById("result").innerHTML = result;
    
    

} 