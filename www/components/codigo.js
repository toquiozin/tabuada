function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada='';
  
    for(var count=1; count<=num ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
  };