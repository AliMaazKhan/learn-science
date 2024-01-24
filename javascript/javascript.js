function generateProblem() {
    var num1 = Math.floor(Math.random() * 10);
    var num2 = Math.floor(Math.random() * 10);
    
    document.getElementById('problem').innerHTML = num1 + ' + ' + num2 + ' = ';
  }
  
  function checkAnswer() {
    var userAnswer = parseInt(document.getElementById('userAnswer').value);
    
     var num1 = parseInt(document.getElementById('problem').innerHTML.split('+')[0]);
     var num2 = parseInt(document.getElementById('problem').innerHTML.split('+')[1]);
    
     if (userAnswer === (num1 + num2)) {
       document.getElementById('result').innerHTML = 'Correct!';
     } else {
       document.getElementById('result').innerHTML = 'Incorrect. Try again!';
     }
    
     generateProblem();
  }
  
  generateProblem();
  