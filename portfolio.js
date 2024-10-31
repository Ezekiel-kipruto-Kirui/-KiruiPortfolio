let menubtn1 = document.querySelector('.js-menubtn')
let menudiv1 = document.querySelector('.js-menudiv')
let hidedivbtn = document.querySelector('.hidediv')
if(menudiv1){
    menudiv1.style.display = 'none'
}
function tooglediv()
{
    if (menudiv1.style.display === 'none')
        {
            menudiv1.style.display = 'block'
        }
    
}
menubtn1.addEventListener('click',()=>{
    tooglediv()
})
hidedivbtn.addEventListener('click',()=>{
    if(menudiv1.style.display === 'block'){
         menudiv1.style.display = 'none'
    }
})