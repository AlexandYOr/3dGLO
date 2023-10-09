const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')

    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu()
        } else if (e.target === closeBtn) {
            handleMenu()
        } else if (e.target.matches('menu>ul>li>a')) {
            handleMenu()        
        } else if (!e.target.closest('menu')) {
            handleMenu()
        }
    }) 
}






export default menu