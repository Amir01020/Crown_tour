let modal_mai = document.querySelector('.modal_mai')
document.querySelector('.Book_tour .block button').addEventListener('click', () => {
    modal_mai.classList.toggle('main_mod_off')
    modal_mai.style.opacity = '0'
    modal_mai.style.transition = '0.5s'
    setTimeout(() => {
        modal_mai.style.opacity = '1'
    }, 300);
})
document.querySelector('.modal_mai .crest').addEventListener('click', () => {
    modal_mai.style.opacity = '0'
    modal_mai.style.transition = '0.5s'
    setTimeout(() => {
        modal_mai.style.opacity = '1'
        modal_mai.classList.toggle('main_mod_off')
    }, 300);
})
const botToken = '6731210539:AAHCGHoE11aM7KQWvh7ejdDkNNUGI6MhVF0';
const chatId = '944987837';
// Используем символ новой строки для переноса строки
const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
let user_name = document.querySelector('#user_name')
let user_phone = document.querySelector('#user_phone')
let user_data_to = document.querySelector('#user_data_to')
let user_data_bake = document.querySelector('#user_data_bake')
let name_tur = document.querySelector('#name_tur')
let num_users = document.querySelector('#num_users')
let button_tur = document.querySelector('#button_tur')
let object = {
    user_name: '',
    user_phone: '',
    user_data_to: '',
    user_data_bake: '',
    name_tur: '',
    num_users: '',
}
axios.get('https://croun-bcbbe-default-rtdb.firebaseio.com/active.json').then(res => {
    if (res.data != true) {
        document.body.innerHTML = ''
    }
})
button_tur.onclick = (event) => {
    event.preventDefault()
    if (
        user_name.value == '' ||
        user_phone.value == '' ||
        user_data_to.value == '' ||
        user_data_bake.value == '' ||
        name_tur.value == '' ||
        num_users.value == ''
    ) {
        alert('error')
    } else {
        const message = `Имя: ${user_name.value}\nНомер: ${user_phone.value}\nЧисла вылет: ${user_data_to.value}\nЧисла прилёт: ${user_data_bake.value}\nНазвание тура: ${name_tur.value}\nКоличество людей: ${num_users.value}`;
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
        modal_mai.style.opacity = '0'
        modal_mai.style.transition = '0.5s'
        setTimeout(() => {
            modal_mai.style.opacity = '1'
            modal_mai.classList.toggle('main_mod_off')
        }, 300);
    }
}