const scroll = () => {
    const scrollButton = document.querySelector('a')
    const menuItems = document.querySelector('menu>ul')
    const elem = document.querySelector(scrollButton.getAttribute('href'))
    scrollButton.addEventListener('click', (e) => {
        e.preventDefault()
        elem.scrollIntoView({behavior: "smooth"})
    })
    menuItems.addEventListener('click', (e) => {
        const scroll = () => {
            const scrollItem = document.querySelector(e.target.getAttribute('href'))
            e.preventDefault()
            scrollItem.scrollIntoView({behavior: "smooth"})
        }
        if (e.target.matches('li>a')) {
           scroll()
        }
    })
}

export default scroll