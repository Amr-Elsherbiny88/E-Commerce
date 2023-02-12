
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
const text = document.querySelector('.clothes-text');
const texxt = document.querySelector('.electric-text');
const texxxt = document.querySelector('.loc-text');
const mood = document.querySelector('.mood-text');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        text.style.color = 'black';
        text.style.color = 'black';
        texxt.style.color = 'black';
        texxxt.style.color = 'black';
        mood.style.color = 'black';
        toggle .style.color="black"
        body.style.transition = '2s';
        
    }else{
        body.style.background = 'black';
        body.style.color = 'black';
        text.style.color = 'white';
        texxt.style.color = 'white';
        texxxt.style.color = 'white';
        mood.style.color = 'white';
        toggle .style.color="white"
        body.style.transition = '2s';
    }
});

// dark mood end