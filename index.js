
const button = document.getElementById('button');
const idioms = document.getElementById('container-idioms')


button.addEventListener('click',function() {
    if(idioms.style.display ==='none' || idioms.style.display === ''){
        idioms.style.display = 'block';
    }
    else{
        idioms.style.display = 'none';
    }
})