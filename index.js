let openBtn = document.getElementById('open-button');
let modalContainer = document.getElementById('modal-container');
let closeButton = document.getElementById('close-btn');


openBtn.addEventListener('click',function(){
    modalContainer.style.display = 'block';
});


closeButton.addEventListener('click',function(){
    modalContainer.style.display = 'none';
});



window.addEventListener('click',function(e){
    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});