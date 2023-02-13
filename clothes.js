(function() {
		
    let field = document.querySelector('.items');
    let li = Array.from(field.children);

   

    function SortProduct() {
        let select = document.getElementById('select');
        let ar = [];
        for(let i of li){
            const last = i.lastElementChild;
            const x = last.textContent.trim();
            const y = Number(x.substring(1));
            i.setAttribute("data-price", y);
            ar.push(i);
        }
        this.run = ()=>{
            addevent();
        }
        function addevent(){
            select.onchange = sortingValue;
        }
        function sortingValue(){
        
            if (this.value === 'Default') {
                while (field.firstChild) {field.removeChild(field.firstChild);}
                field.append(...ar);	
            }
            if (this.value === 'LowToHigh') {
                SortElem(field, li, true)
            }
            if (this.value === 'HighToLow') {
                SortElem(field, li, false)
            }
        }
        function SortElem(field,li, asc){
            let  dm, sortli;
            dm = asc ? 1 : -1;
            sortli = li.sort((a, b)=>{
                const ax = a.getAttribute('data-price');
                const bx = b.getAttribute('data-price');
                return ax > bx ? (1*dm) : (-1*dm);
            });
             while (field.firstChild) {field.removeChild(field.firstChild);}
             field.append(...sortli);	
        }
    }

   
    new SortProduct().run();
})();



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
const main = document.querySelector('main');
const text = document.querySelector('.clothes-text');
const span = document.querySelector('main span');
const mood = document.querySelector('.mood-text');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        main.style.background = 'white';
        body.style.color = 'black';
        span.style.color = 'black';
        text.style.color = 'black';
        mood.style.color = 'black';
        toggle .style.color="black"
        body.style.transition = '2s';
        main.style.transition = '2s';
        
    }else{
        body.style.background = 'black';
        main.style.background = 'black';
        body.style.color = 'black';
        span.style.color = 'white';
        text.style.color = 'white';
        mood.style.color = 'white';
        toggle.style.color="white";
        body.style.transition = '2s';
        main.style.transition = '2s';
    }
});

// dark mood end