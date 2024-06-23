
const button = document.getElementById('button');
const idioms = document.getElementById('container-idioms')
const leng = document.querySelectorAll('#leng a');


button.addEventListener('click',function() {
    if(idioms.style.display ==='none' || idioms.style.display === ''){
        idioms.style.display = 'block';
    }
    else{
        idioms.style.display = 'none';
    }
})



leng.forEach((link) =>{
    link.addEventListener('click', (event)=>{
        const lang = event.target.textContent;

        if(lang === 'French'){
            location.href="./french/french.html"
        }
        else if(lang ==='Spanish'){
            location.href="./spanish/spanish.html"
        }

        else {
            location.href="./index.html"
        }
    })
})