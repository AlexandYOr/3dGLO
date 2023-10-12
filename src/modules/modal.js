import {animate} from './helper.js'

const modal = () => {
    
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup') 
    const modalContent = modal.querySelector('.popup-content')
    // let count = -30
    // const animationModal = () => {
    //     count++
    //     if (count <= 38) {
    //         modalContent.style.left = `${count}%`
    //         requestAnimationFrame(animationModal)
    //     }
    // }
    // const reverseAnimationModal = () => {
    //     count--
    //     if (count > -30) {
    //         modalContent.style.left = `${count}%`
    //         requestAnimationFrame(reverseAnimationModal)
    //     } else if (count === -30) {
    //         modal.style.display = 'none'
    //     }
    // }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (document.documentElement.clientWidth > 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                      modalContent.style.opacity = progress * 100 + '%';
                    }
                  }); 
            }   
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (document.documentElement.clientWidth > 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                      modalContent.style.opacity = progress * 0 + '%';
                    }
                  });    
                  modal.style.display = 'none'            
            } else {
                modal.style.display = 'none'
            }   
        }
    })
}

export default modal