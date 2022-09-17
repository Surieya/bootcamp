window.onload=function(){
  const menu_btn=document.querySelector('.right-bar');
  menu_btn.addEventListeber('click',function()
  {
    menu_btn.classList.toggle('is-active');
  })
}