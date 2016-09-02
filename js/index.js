$(document).ready(function(){
  
  var answer;               //stores result
  var isDecimal = false;    //flag to avoid multiple decimals
  var equalFlag = false;    //flag to clear field for new calc
  var opFlag = false;       //flag to enable use of answer in next calc
  var numbers = function(num) {
    if(equalFlag === false && opFlag === false){
    $('#entry').append(num);
    } else if(equalFlag === true && opFlag === false){
      $('#entry').text('');
      $('#entry').append(num);
      equalFlag = false;
    } else if(equalFlag === true && opFlag === true){
      $('#entry').append(num);
      equalFlag = false;
      opFlag = false;
    } else if(equalFlag === false && opFlag === true){
      $('#entry').append(num);
    }
  };
  
  // clear all
  $('#ac').click(function(){
    $('#entry').text("");
  });
  
  // clear last number
  $('#ce').click(function(){
    if($('#entry').text().charAt($('#entry').text().length - 1) === ' '){
      $('#entry').text($('#entry').text().slice(0,-3));
    } else {
      $('#entry').text($('#entry').text().slice(0,-1));
    }
  });
  
  // NUMBERS & DECIMAL
  $('#seven').click(function(){numbers(7);});
  
  $('#eight').click(function(){numbers(8);});
  
  $('#nine').click(function(){numbers(9);});
  
  $('#four').click(function(){numbers(4);});
  
  $('#five').click(function(){numbers(5);});
  
  $('#six').click(function(){numbers(6);});
  
  $('#one').click(function(){numbers(1);});
  
  $('#two').click(function(){numbers(2);});
  
  $('#three').click(function(){numbers(3);});
  
  $('#zero').click(function(){numbers(0);});
  
  $('#dec').click(function(){
    if(isDecimal === false) {
    $('#entry').append('.');
    }
    isDecimal = true;
  });
  
  // OPERATIONS
  $('#plus').click(function(){
    if($('#entry').text() != ''){
    $('#entry').append(" + ");
    }
    isDecimal = false;
    opFlag = true;
  });
  
  $('#minus').click(function(){
    if($('#entry').text() != ''){
    $('#entry').append(" - ");
    }
    isDecimal = false;
    opFlag = true;
  });
  
  $('#multi').click(function(){
    if($('#entry').text() != ''){
    $('#entry').append(" * ");
    }
    isDecimal = false;
    opFlag = true;
  });
  
  $('#divide').click(function(){
    if($('#entry').text() != ''){
    $('#entry').append(" / ");
    }
    isDecimal = false;
    opFlag = true;
  });
  
  $('#pct').click(function(){
    $('#entry').append('%');
  });
  
  // EQUAL
  $('#equal').click(function(){
    
    answer = eval($('#entry').text());
    $('#entry').text(answer);
    equalFlag = true;
    isDecimal = false;
    opFlag = false;
    
  });
  
  // ANS
  $('#ans').click(function(){
    $('#entry').text(answer);
  });
  
});