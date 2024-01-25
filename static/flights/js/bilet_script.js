let arr = document.querySelector('#block_right')
console.log();
let sity = JSON.parse(arr.dataset.sity)
let citiesNames = sity.map(city => city.name)
let sity_value = document.querySelectorAll('.sity_value')
function create_search(text, block) {
    let p = document.createElement('p')
    p.classList.add('my_input_value')
    p.innerHTML = text
    p.dataset.value = text
    block.append(p)
}
let text_sity_value = document.querySelector('#text_sity_value')
for (let item of sity_value) {
    item.oninput = () => {
        text_sity_value.innerHTML = ''
        for (let cityName of citiesNames) {
            if (cityName !== null) {
                if (cityName.includes(item.value) == true) {
                    text_sity_value.classList.add('value_active')
                    create_search(cityName, text_sity_value)

                }
            }
        }
        if (item.value == '') {
            text_sity_value.classList.remove('value_active')

        }
        let my_input_value = document.querySelectorAll('.my_input_value')
        my_input_value.forEach(i => {
            i.onclick = () => {
                
                item.value = i.dataset.value
                text_sity_value.classList.remove('value_active')
            }
        });

    }

};




let arr_1

if (arr.dataset.arr !== '') {
    arr_1 = JSON.parse(arr.dataset.arr)

}
console.log(JSON.parse(arr.dataset.arr));



let checet = document.querySelectorAll('.checet')
for (let i of checet) {
    i.onclick = () => {
        i.classList.toggle('active_check')
    }
}

let duration_btn = document.querySelector('#duration_btn')
duration_btn.onclick = () => {
    duration_btn.classList.toggle('btn_active')
}

let switch_btn = document.querySelectorAll('.switch-btn')
for (let i of switch_btn) {
    i.onclick = () => {
        i.classList.toggle('switch-on')
    }
}

if (arr.dataset.arr !== '') {
    let items_ticket = document.querySelectorAll('#items_ticket')

    let transfers = document.querySelectorAll(".transfers ")


    transfers.forEach(i => {
        i.onclick = () => {
            transfers.forEach(items => {
                items.checked = false
            });
            i.checked = true
            for (let item of items_ticket) {
                item.style.display = 'none'
                if (i.dataset.item == item.dataset.transfers) {
                    item.style.display = 'flex'
                }
            }
        }
    });
}



let oupen_filter = document.querySelector('#oupen_filter')
let cloase = document.querySelector('#cloase')
let filter_modl = document.querySelector('.filter_modl')
oupen_filter.onclick = () => {
    filter_modl.classList.toggle('filter_modl_active')

    filter_modl.style.opacity = '0'
    filter_modl.style.transition = '0.5s'
    setTimeout(() => {
        filter_modl.style.opacity = '1'
    }, 300);
}

cloase.onclick = () => {

    filter_modl.style.opacity = '0'
    filter_modl.style.transition = '0.5s'
    setTimeout(() => {
        filter_modl.classList.toggle('filter_modl_active')
        filter_modl.style.opacity = '1'
    }, 300);
}


// for(let i of arr.data){
//     sity_arr.push(i.destination)
//     sity_arr.push(i.origin)
// }

