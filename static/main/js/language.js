let select_leng_id = document.getElementById('translater')
let main_leng = document.querySelector('.main_leng')
select_leng_id.addEventListener('change', () => {
    main_leng.querySelector('option').value = select_leng_id.value
    main_leng.querySelector('.leng_butt').click()
})





// let textttt =document.querySelector('#textttt')

// let arr = JSON.parse(textttt.dataset.text)

