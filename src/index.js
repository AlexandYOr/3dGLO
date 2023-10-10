import timer from "./modules/timer.js"
import bootstrap from "../css/bootstrap.min.css" 
import style from "../css/style.min.css" 
import menu from "./modules/menu.js"
import modal from "./modules/modal.js"
import validation from "./modules/validation.js"
import tabs from "./modules/tabs.js"
import slider from "./modules/slider.js"

timer('05 october 2023')
menu()
modal()
validation()
tabs()

const portfolioSliderClasses = {
    sliderBlockClass: '.portfolio-content',
    slideClass: '.portfolio-item',
    dotsBlockClass:'.portfolio-dots',
    activeSlideClass:'portfolio-item-active',
    buttonClass: '.portfolio-btn'
}


slider(2000, portfolioSliderClasses)