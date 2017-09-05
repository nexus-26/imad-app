var button = document.getElementById('counter');
button.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the result
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status === 200){
              var counter = request.responseText;
              var span=document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }  
    };
    //Make the request
    request.open('GET', 'http://adhikarlanitesh.imad.hasura-app.io/counter', true);
    request.send(null);
}; 