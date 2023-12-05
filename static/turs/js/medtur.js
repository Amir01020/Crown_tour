document.querySelector('.modal_tur .crest').addEventListener('click', () => {
    document.querySelector('.modal_tur').classList.toggle('tur_mod_off')
})


let buttons = document.querySelectorAll('#btn_post_turs')

for(let i of buttons){
    i.onclick = () => {
        document.querySelector('.modal_tur').classList.toggle('tur_mod_off')

    }
}
