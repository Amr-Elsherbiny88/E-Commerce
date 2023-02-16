
// loading page start
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });
//   loading page end

// dark mood start
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const texxxt = document.querySelector('h1');
const text = document.querySelector('.ttle');
const texxxxt = document.querySelector('h4');
const texxt = document.querySelector('.ttle2');


toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        texxxxt.style.color = 'black';
        texxxt.style.color = 'black';
        text.style.color = 'black';
        texxt.style.color = 'black';
       
        toggle .style.color="black"
        body.style.transition = '2s';
        main.style.transition = '2s';
        
    }else{
        body.style.background = 'black';
        body.style.color = 'black';
        texxxxt.style.color = 'white';
        texxxt.style.color = 'white';
        text.style.color = 'white';
        texxt.style.color = 'white';
       
        toggle.style.color="white";
        body.style.transition = '2s';
        main.style.transition = '2s';
    }
});

// dark mood end





// email js
function sendMail() {

  var from_name =  document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("error");
  var errror = "";

  if (from_name.length ==""){
    errror = "please enter your name"
    error.innerHTML= errror ;
    return false; 
  }


  else if (email.indexOf("@") == -1 || email.length < 10){
    errror = "please enter Valid Email"
    error.innerHTML= errror ;
    return false; 
  }


  else if (message.length ==""){
    errror = "please enter a message"
    error.innerHTML= errror ;
    return false; 
    
  }
  
  else {
    var params = {
      from_name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_zbe3b2d";
    const templateID = "template_kuf1j8n";
  
      emailjs.send(serviceID,templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
    return true;
  }
  


  
}