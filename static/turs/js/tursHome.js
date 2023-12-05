
function option_create(block, city) {
    let option = document.createElement("option");

    // Устанавливаем атрибуты элемента
    option.value = city; // Значение
    option.className = "filter"; // Класс
    option.dataset.city = city; // Данные (data-views)
    option.id = "option-filter"
    // Устанавливаем текстовое содержимое элемента
    option.textContent = city;

    block.append(option)

}

let select_citi = document.querySelector('#select_citi')

let tursElement = document.querySelectorAll('#tursElement')
let select_view = document.querySelector('#select_view')




let uniqueArray = ['Страны'];

let select_view_arr = ['Тип тура']


for (let i = 0; i < tursElement.length; i++) {
    tursElement[i].dataset.view = tursElement[i].dataset.view.toLocaleLowerCase()
    tursElement[i].dataset.departure_city = tursElement[i].dataset.departure_city.toLocaleLowerCase()
    if (uniqueArray.indexOf(tursElement[i].dataset.departure_city) === -1) {
        uniqueArray.push(tursElement[i].dataset.departure_city);
    }
    if (select_view_arr.indexOf(tursElement[i].dataset.view) === -1) {
        select_view_arr.push(tursElement[i].dataset.view);
    }
}



select_citi.innerHTML = ''
for (let i of uniqueArray) {
    i = i.toLocaleLowerCase()

    option_create(select_citi, i)
}

select_view.innerHTML = ''

for (let i of select_view_arr) {
    i = i.toLocaleLowerCase()

    option_create(select_view, i)
}




select_citi.onchange = () => {
    for (let items of tursElement) {
        items.classList.add('none')
        items.dataset.departure_city = items.dataset.departure_city.toLocaleLowerCase()

        if (select_citi.value == items.dataset.departure_city) {
            items.classList.remove('none')

        } else if (select_citi.value == 'страны') {

            items.classList.remove('none')
        }
    }
}


select_view.onchange = () => {
    select_citi.value = select_citi.value.toLocaleLowerCase()
    for (let items of tursElement) {
        items.classList.add('none')
        items.dataset.view = items.dataset.view.toLocaleLowerCase()


        if (select_view.value == items.dataset.view) {
            
            items.classList.remove('none')

        } else if (select_view.value == 'тип тура') {

            items.classList.remove('none')
        }
    }
}


