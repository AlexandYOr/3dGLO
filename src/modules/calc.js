const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    
    const changeTotalValue = (prevTotal = 0, newTotal = 0) => {
        let tempValue = +prevTotal
        const animationInterval = setInterval(() => {
            if (tempValue >= newTotal) {
                clearInterval(animationInterval)
            } 
                tempValue = tempValue + 18 > newTotal ? newTotal : tempValue + 18
                total.textContent = tempValue
            
            
        }, 20)

    }

    const countCalc = () => {
        const total = document.querySelector('#total')
        const { options, selectedIndex } = calcType //const {options: <alt name>, selectedIndex}
        const calcTypeValue = +options[selectedIndex].value
        const calcSquareValue = +calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }

        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10
        }
        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        } 
        console.log(totalValue)
        changeTotalValue(total.textContent, totalValue)
    }

    calcBlock.addEventListener('input', countCalc)
}



export default calc