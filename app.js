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
            list.innerHTML += `<li class="block-item mb-10">+998${inputCode.value}${el}</li>`
        }

        count.innerHTML += phoneNumbersArray.length


        const items = document.querySelectorAll('.block-item')

        for (let item of items) {
            item.addEventListener('click', function () {
                item.classList.toggle('active')
            })
        }
    } else {
        alert(`"${inputNumber.value}" - Это не число!`)
    }
})

buttonRl.addEventListener("click", function () {

    // console.log(numbers)

    for (let i = 0; i < numbers.length; i++) {
        let el = numbers[i];
        list.innerHTML += `<li class="block-item">${el}</li>`
    }
})
