const createDot = (active) => {     
    const newDot = document.createElement('li')
    newDot.classList.add('dot')
    if (active) {
        newDot.classList.add('dot-active')
    }
    return newDot
}


const slider = (timeInterval, classes) => {
    const {sliderBlockClass, slideClass, dotsBlockClass, activeSlideClass = '.slide-active', buttonClass} = classes
    const sliderBlock = document.querySelector(sliderBlockClass)

    if (!sliderBlock) return

    const slides = document.querySelectorAll(slideClass)
    
    if (!slides.length) return

    const dots = Array.from(slides).map((_, index) => createDot(index === 0))
    console.log(dots)
    const dotsBlock = document.querySelector(dotsBlockClass)
    dotsBlock.append(...dots)
    let currentSlide = 0
    let interval
    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, activeSlideClass)
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, activeSlideClass)
        nextSlide(dots, currentSlide, 'dot-active')
        
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()
        if (!e.target.matches(`.dot, ${buttonClass}`)) {
            return
        }

        prevSlide(slides, currentSlide, activeSlideClass)
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.matches('#arrow-right')) {
            currentSlide++
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
        
        nextSlide(slides, currentSlide, activeSlideClass)
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches(`.dot, ${buttonClass}`)) {
            stopSlide()
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches(`.dot, ${buttonClass}`)) {
            startSlide(timeInterval)
        }
    }, true)


    startSlide(timeInterval)
}


export default slider