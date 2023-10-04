const modal = () => {
    const buttons = document.querySelectorAll('.popup-btn')
    const modal = document.querySelector('.popup')
    const closeBtn = document.querySelector('.popup-close')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}

export default modal