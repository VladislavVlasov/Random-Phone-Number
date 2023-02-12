const list = document.querySelector(".block-list")
const inputNumber = document.querySelector(".block-input-number")
const inputCode = document.querySelector(".block-input-code")
const buttonGo = document.querySelector(".block-button-go")
const buttonRl = document.querySelector(".block-button-reload")
const count = document.querySelector(".block-count")


function getRandomPhoneNumber() {
    let output = '';
    for (let i = 0; i < 7; i++) {
        output += Math.round(Math.random() * 9)
    }
    return output;
}


buttonGo.addEventListener('click', function () {
    list.innerHTML = count.innerHTML = ''

    if (!isNaN(inputNumber.value)) {
        let phoneNumbersArray = []

        for (let i = 0; i < inputNumber.value; i++) {
            let getPhone = getRandomPhoneNumber()
            if (phoneNumbersArray.includes(getPhone)) continue
            phoneNumbersArray.push(getPhone)
        }

        for (let i = 0; i < phoneNumbersArray.length; i++) {
            let el = phoneNumbersArray[i];
            list.innerHTML += `<li class="mb-10"><a class="block-link" href="tel:+998${inputCode.value}${el}">+998${inputCode.value}${el}</a></li>`
        }

        localStorage.setItem('numbers', JSON.stringify(phoneNumbersArray))
    } else {
        alert(`"${inputNumber.value}" - Это не число!`)
    }
})

buttonRl.addEventListener("click", function () {
    list.innerHTML = count.innerHTML = ''

    const raw = localStorage.getItem('numbers')
    const parson = JSON.parse(raw)

    for (let i = 0; i < parson.length; i++) {
        let el = parson[i];
        list.innerHTML += `<li class="mb-10"><a class="block-link" href="tel:+998${inputCode.value}${el}">+998${inputCode.value}${el}</a></li>`
    }

    count.innerHTML += parson.length
})
