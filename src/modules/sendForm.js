const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка'
    const successText = 'Спасибо!'


    const validate = (list) => {
        let success = true
        list.forEach((elem) => {
            if (elem.name === 'user_phone') {
                success = /^[\d()+-]+$/g.test(elem.value)
                console.log(success)
            }
            
            if (elem.name === 'user_name') {
                success = /[а-я -]/gi.test(elem.value)
                console.log(success)
            }
            if (elem.name === 'user_message') {
                success = /[а-яА-ЯёЁ0-9\s.,;:!?]+$/gi.test(elem.value)
                console.log(success)
            }
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then((data) => {
                statusBlock.textContent = successText

                formElements.forEach((input) => {
                    input.value = ''
                })
            })
                .catch((error) => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны')
        }
    }

    try {
        if(!form) {
            throw new Error('пофиксите верстку')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch(error) {
        console.log(error.message)
    }
    
}

export default sendForm