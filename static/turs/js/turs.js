let oupen_tur_block = document.querySelector('#oupen_tur_block')
let clouce_tur_block = document.querySelector('#clouce_tur_block')
let turs_btn_oupen = document.querySelector('#turs_btn_oupen')
let turs_btn_clouce = document.querySelector('#turs_btn_clouce')


// turs_btn_clouce.onclick = (event) => {
//     event.preventDefault()
//     oupen_tur_block.classList.add('tur_clouce')
//     clouce_tur_block.classList.remove('tur_clouce')
//     turs_btn_clouce.classList.add('akti')
//     turs_btn_oupen.classList.remove('akti')
//
// }

turs_btn_oupen.onclick = (event) => {
    event.preventDefault()

    oupen_tur_block.classList.remove('tur_clouce')
    clouce_tur_block.classList.add('tur_clouce')
    turs_btn_clouce.classList.remove('akti')
    turs_btn_oupen.classList.add('akti')
}


let tur_img = [
    {
        name:'Пляжный',
        img:'/static/main/img/Пляжный.svg'
    },{
        name:'Национальный',
        img:'/static/main/img/Национальный.svg'
    },{
        name:'Шоппинг',
        img:'/static/main/img/Шоппинг.svg'
    },{
        name:'Экскурсии',
        img:'/static/main/img/Экскурсии.svg'
    },{
        name:'Горные лыжи',
        img:'/static/main/img/ГорныеЛыжи.svg'
    },{
        name:'Экстремальный',
        img:'/static/main/img/Экстремальный.svg'
    },
]





let type_tur_img = document.querySelectorAll('.type_tur_img')


for(let i of tur_img){

    for(let item of type_tur_img){
        console.log(item.dataset.type)
        if(item.dataset.type == i.name){
            item.src = i.img

        }
    }
   
}

