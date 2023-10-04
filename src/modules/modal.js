const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = modal.querySelector('.popup-close')
    const modalContent = modal.querySelector('.popup-content')
    console.dir(window.screen)
    let count = -30
    const animationModal = () => {
        count++
        if (count <= 38) {
            modalContent.style.left = `${count}%`
            requestAnimationFrame(animationModal)
        }
    }
    const reverseAnimationModal = () => {
        count--
        if (count > -30) {
            modalContent.style.left = `${count}%`
            requestAnimationFrame(reverseAnimationModal)
        } else if (count === -30) {
            modal.style.display = 'none'
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (document.documentElement.clientWidth > 768) {
                requestAnimationFrame(animationModal) 
            }   
        })
    })
    closeBtn.addEventListener('click', () => {
        if (document.documentElement.clientWidth > 768) {
            requestAnimationFrame(reverseAnimationModal)
        } else {
            modal.style.display = 'none'
        }
    })
}

export default modal