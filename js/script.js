"use strict";"function"!=typeof Array.prototype.forEach&&(Array.prototype.forEach=function(e){for(var t=0;t<this.length;t++)e.apply(this,[this[t],t,this])}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach),window.onload=function(e){var t=document.querySelector(".header.smallHeader#smallHeader"),n=document.querySelector(".header#mainHeader");if(n)var o=n.getClientRects()[0].height-100;t&&(window.pageYOffset>=o?t.classList.remove("hide"):t.classList.add("hide"))};var liMenuClasses=["headerFirstLi","headerSecLi","thirdLiOptions","sectionWunder__dropdownButton__cont","sectionReviewsDropdownButton"],headerBtnLiClasses=["headerFirstSidebBtn","headerSecondSidebBtn","headerThirdSidebBtn"];liMenuClasses.forEach(function(e){manageMenu(e)});var counter=0;function manageMenu(e){var t=document.querySelectorAll("."+e);t.length>0&&t.forEach(t=>{t.isClicked=!1,t.onclick=function(n){(n.target===t.children[0]||n.target===t.children[1].children[0]&&"thirdLiOptions"===e)&&n.preventDefault(),t.isClicked||t.children[2].classList.contains("hide")?t.children[2].classList.toggle("hide"):t.children[2].classList.remove("hide"),t.children[2].classList.contains("hide")?t.isClicked=!1:t.isClicked=!0},window.addEventListener("click",function(e){if(e.target!==t&&!t.contains(e.target))try{t.isClicked=!1,t.children[2].classList.add("hide")}catch(e){}})})}headerBtnLiClasses.forEach(function(e){var t=document.querySelector("."+e),n=document.querySelectorAll("."+e+" ul li"),o=document.querySelector("."+e+" li.selected");n.forEach(e=>{manageActiveClass(e,o)}),t&&(t.onclick=function(t){document.querySelector("."+e+" .header__Content__btns__btnContainer__downIcon__liOptions").classList.toggle("hide"),"headerThirdSidebBtn"===e&&document.querySelector("."+e+" .header__Content__btns__btnContainer__downIcon img").classList.toggle("rotateUp")}),t&&window.addEventListener("click",function(n){n.target===t||t.contains(n.target)||(document.querySelector("."+e+" .header__Content__btns__btnContainer__downIcon__liOptions").classList.add("hide"),t.classList.contains("headerThirdSidebBtn")&&document.querySelector("."+e+" .thirdBtnOptions img").classList.contains("rotateUp")&&document.querySelector("."+e+" .thirdBtnOptions img").classList.remove("rotateUp"))})});var itemBtnTwo=document.querySelectorAll(".itemBtnTwo");itemBtnTwo.length&&itemBtnTwo.forEach(function(e){e.onclick=function(t){e.children[1].children[1].classList.toggle("hide")},window.addEventListener("click",function(t){t.target===e||e.contains(t.target)||e.children[1].children[1].classList.add("hide")})});var nav=document.querySelector(".nav"),nav__close=document.querySelector(".nav__close"),burgerMenu=document.querySelectorAll(".header__top__all__left__navMenu");burgerMenu.forEach(e=>{e.onclick=function(){nav.classList.remove("moveNavAway")}}),nav__close.onclick=function(){nav.classList.add("moveNavAway")},console.log(burgerMenu.length),window.addEventListener("click",function(e){2===burgerMenu.length&&e.target!==nav&&e.target!==burgerMenu[0]&&e.target!==burgerMenu[0].children[0]&&e.target!==burgerMenu[1]&&e.target!==burgerMenu[1].children[0]&&nav.classList.add("moveNavAway"),1===burgerMenu.length&&e.target!==nav&&e.target!==burgerMenu[0]&&e.target!==burgerMenu[0].children[0]&&nav.classList.add("moveNavAway")}),window.onscroll=function(e){var t=document.querySelector(".header.smallHeader#smallHeader"),n=document.querySelector(".header#mainHeader");if(n)var o=n.getClientRects()[0].height-100;t&&(window.pageYOffset>=o?t.classList.remove("hide"):t.classList.add("hide"))};var footerFoldIcon=document.querySelectorAll(".footer__allLink__col__top i");footerFoldIcon.length&&footerFoldIcon.forEach(function(e){e.addEventListener("click",function(e){e.target.classList.contains("open")?e.target.classList.contains("open")&&(e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom="1.5rem",e.target.parentElement.nextElementSibling.classList.add("hidde"),e.target.classList.remove("open"),e.target.classList.add("close"),e.target.innerHTML="+"):(e.target.parentElement.nextElementSibling.classList.remove("hidde"),e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom=0,e.target.classList.add("open"),e.target.classList.remove("close"),e.target.innerHTML="-")})});var searchModal=document.querySelector(".searchModal"),searchIcon=document.querySelectorAll(".searchIcon img"),searchBoxCloseBtn=document.querySelector(".searchModal__content__close"),searchBtn=document.querySelector(".searchBtn");searchIcon.forEach(e=>{e.addEventListener("click",function(){searchModal.classList.remove("closeModal")})}),searchBoxCloseBtn.addEventListener("click",function(){searchModal.classList.add("closeModal")}),searchBtn.addEventListener("click",function(){searchModal.classList.add("closeModal")});var langList1=document.querySelectorAll(".langDropdown1 .header__top__all__middle__liOptions li");langList1.forEach(function(e,t){manageActiveClass(e,document.querySelector(".langDropdown1 .header__top__all__middle__liOptions li.selected"))});var langList2=document.querySelectorAll(".langDropdown2 .header__top__all__middle__liOptions li");langList2.forEach(function(e){manageActiveClass(e,document.querySelector(".langDropdown2 .header__top__all__middle__liOptions li.selected"))});var reviewDropdownButton=document.querySelectorAll(".sectionReviewsDropdownButton .sectionWunder__dropdownButton__cont__list li");reviewDropdownButton.forEach(function(e){manageActiveClass(e,document.querySelector(".sectionReviewsDropdownButton .sectionWunder__dropdownButton__cont__list li.selected"))});var WunderDropdownButton=document.querySelectorAll(".sectionWunder__dropdownButton .sectionWunder__dropdownButton__cont__list li");function manageActiveClass(e,t){null!=e&&void 0!==typeof e&&e.addEventListener("mouseenter",function(n){e.classList.contains("selected")||(e.classList.add("active"),t.classList.remove("active")),e.classList.contains("selected")&&e.classList.add("active")}),null!=e&&void 0!==typeof e&&e.addEventListener("mouseleave",function(n){e.classList.contains("selected")||(e.classList.remove("active"),t.classList.add("active"))})}WunderDropdownButton.forEach(function(e){manageActiveClass(e,document.querySelector(".sectionWunder__dropdownButton .sectionWunder__dropdownButton__cont__list li.selected"))});