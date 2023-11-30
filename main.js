function showPage(page){
    document.querySelectorAll('div').forEach(div =>{      //querySelect all the divs, for each div, remove other the other hobbies from the page
            div.style.display='none';  

    });
    document.querySelector(`#${page}`).style.display='flex';  //targets the user chosen page and changes from 'none' to 'flex'
}

document.addEventListener('DOMContentLoaded', function(){  //eventlistener on the whole document, esnsure content has bee loaded
    document.querySelectorAll('button').forEach(button =>{  //for each button when clicked call showPage
        button.onclick = function(){
            showPage(this.dataset.page)  // access the page that parsed in index.html, chosen page is sent to showPage
        }
    })
})