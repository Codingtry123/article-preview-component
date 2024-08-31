let share = document.getElementsByClassName('share')[0];
let hid = document.getElementsByClassName("tex")[0];
let peo = document.getElementsByClassName("peo")[0];
let text = document.getElementsByClassName('sha')[0];
share.addEventListener('click', function(){
    share.classList.toggle('hidden');
    share.classList.toggle('shares');
    hid.classList.toggle('hidden');
    peo.classList.toggle('hidden');
    text.classList.toggle('hidden');
    if(share.classList.contains('hidden')){
        text.style.display="flex";
       
      


    }
    else{
        text.style.display="none";
     
    }
})
