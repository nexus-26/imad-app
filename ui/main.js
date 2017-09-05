var button = document.getElementById('counter');

button.onclick = function(){
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the result
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status === 200){
              var counter = request.responseText;
              var span = document.getElementById('count');
              console.log(counter);
              span.innerHTML = counter.toString();
          }
      }
    };
    
    //Make the request
    request.open('GET', 'http://localhost/counter', true);
    request.send(null);
   
}; 

var submit = document.getElementById('submit_btn'); 
submit.onclick = function(){
    //make a request to the server and send the names
    var request = new XMLHttpRequest();
    
    //Capture the result
    request.onreadystatechange = function(){
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status === 200){
                var names = request.responseText;
                names= JSON.parse(names);
                var list = '';
                //Create list items
                for(var i=0;i<names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                }
                //Insert it in unordered list
                var ul = document.getElementById('listName');
                ul.innerHTML = list;
          }
      }
    };
    
    //Make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://adhikarlanitesh.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};