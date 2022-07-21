// Variables Represent the HTML DOM elements i'm Woeking With

const menuListOne =  document.getElementById('menu-list-1');
const listOne = document.getElementById('sub-menu-1')
const dropArrowOne = document.getElementById('dropArrow-1');
const menuListTwo =  document.getElementById('menu-list-2');
const listTwo = document.getElementById('sub-menu-2')
const dropArrowTwo = document.getElementById('dropArrow-2');
const navbar = document.querySelector('.navbar')


// Function to display the submenu for both drop Downs
menuListOne.addEventListener('click', dropMenuOne)
menuListTwo.addEventListener('click', dropMenuTwo)


function dropMenuOne(){

    
        listOne.classList.toggle('sub-visible');
        dropArrowOne.classList.toggle('dropArrow');
        console.log('black matter')
        
//    }
}

function dropMenuTwo(){
    listTwo.classList.toggle('sub-visible');
    dropArrowTwo.classList.toggle('dropArrow');
    console.log('black matter')

}



    document.addEventListener('click' , (event) => {;
        if(!event.target.closest(".menu-list") && listOne.classList.contains('sub-visible')){
            listOne.classList.remove('sub-visible');
            dropArrowOne.classList.remove('dropArrow');
        
            console.log('red matter')
        }
    })
// }
    document.addEventListener('click' , (event) => {;
        if(!event.target.closest(".menu-list") && listTwo.classList.contains('sub-visible')){
            listTwo.classList.toggle('sub-visible');
            dropArrowTwo.classList.toggle('dropArrow');
        
            console.log('red matter')
        }
    })
// }


// OPEN NAVBAR Mobile

const menuOpen = document.querySelector('.menu');
const sideNav = document.querySelector('.sidenav');
const menuClose = document.querySelector('.close');

menuOpen.addEventListener('click', () => {
    sideNav.classList.add('sidenav-active');
})

menuClose.addEventListener('click', () => {
    sideNav.classList.remove('sidenav-active');
})

document.addEventListener('click' , (event) => {;
    if(!event.target.closest(".sidenav") && !event.target.closest(".navbar")){
        sideNav.classList.remove('sidenav-active');
    
        console.log('yellow matter')
    }
})

