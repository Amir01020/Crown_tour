let modal_tur = document.querySelector('.modal_tur')
document.querySelector('.modal_tur .crest').addEventListener('click', () => {
    // modal_tur.classList.toggle('tur_mod_off')
    modal_tur.style.opacity = '0'
    modal_tur.style.transition = '0.5s'

    setTimeout(() => {
        modal_tur.style.opacity = '1'
        modal_tur.classList.toggle('tur_mod_off')
    }, 300);
})


let buttons = document.querySelectorAll('#btn_post_turs')

for (let i of buttons) {
    i.onclick = () => {
        // modal_tur.classList.toggle('')
        modal_tur.classList.toggle('tur_mod_off')
        modal_tur.style.opacity = '0'
        modal_tur.style.transition = '0.5s'
        setTimeout(() => {
            modal_tur.style.opacity = '1'
        }, 300);
    }
}


let user_name = document.querySelector('#user_name')
let user_phone = document.querySelector('#user_phone')
let user_email = document.querySelector('#user_email')
let user_comment = document.querySelector('#user_comment')
let button_post = document.querySelector('#button_post')



let object = {
    user_name: '',
    user_phone: '',
    user_email: '',
    user_comment: '',
    button_post: '',
}
const botToken = '6731210539:AAHCGHoE11aM7KQWvh7ejdDkNNUGI6MhVF0';
const chatId = '944987837';
// Используем символ новой строки для переноса строки


const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
button_post.onclick = (event) => {
    event.preventDefault()
    if (
        user_name.value == '' ||
        user_phone.value == '' ||
        user_email.value == '' ||
        user_comment.value == ''
    ) {
        alert('error')
    } else {
        const message = `Имя: ${user_name.value}\nНомер: ${user_phone.value}\nGmail: ${user_email.value}\nКоментарий: ${user_comment.value}`;
        const params = {
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown', // Указываем, что текст содержит разметку Markdown
        };

        // Выполнение HTTP-запроса с помощью Axios
        axios.post(apiUrl, params)
            .then(response => {
                console.log('Message sent successfully:', response.data);
            })
            .catch(error => {
                console.error('Error sending message:', error.response.data);
            });
        modal_tur.classList.toggle('tur_mod_off')
        modal_tur.style.opacity = '0'
        modal_tur.style.transition = '0.5s'
        setTimeout(() => {
            modal_tur.style.opacity = '1'
        }, 300);

    }


}




