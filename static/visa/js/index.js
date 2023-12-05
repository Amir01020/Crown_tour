
let modal_visa = document.querySelector('.modal_visa')

document.querySelector('.head .block button').addEventListener('click', () => {
    modal_visa.classList.toggle('visa_mod_off')
    modal_visa.style.opacity = '0'
    modal_visa.style.transition = '0.5s'
    setTimeout(() => {
        modal_visa.style.opacity = '1'
    }, 300);
})
document.querySelector('.modal_visa .crest').addEventListener('click', () => {
    modal_visa.style.opacity = '0'
    modal_visa.style.transition = '0.5s'
    setTimeout(() => {
        modal_visa.style.opacity = '1'
        modal_visa.classList.toggle('visa_mod_off')
    }, 300);
})

modal_visa.style.opacity = '0'
modal_visa.style.transition = '0.5s'
setTimeout(() => {
    modal_visa.style.opacity = '1'
}, 300);



let user_name = document.querySelector('#user_name')
let phone_user = document.querySelector('#phone_user')
let email_user = document.querySelector('#email_user')
let sity_user = document.querySelector('#sity_user')
let sity = document.querySelector('#sity')
let button = document.querySelector('#button')
const botToken = '6731210539:AAHCGHoE11aM7KQWvh7ejdDkNNUGI6MhVF0';
const chatId = '944987837';
// Используем символ новой строки для переноса строки


const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
let object = {
    user_name: '',
    phone_user: '',
    email_user: '',
    sity_user: '',
    sity: '',
}

button.onclick = (event) => {
    event.preventDefault()
    if (
        user_name.value == '' ||
        phone_user.value == '' ||
        email_user.value == '' ||
        sity_user.value == '' ||
        sity.value == ''
    ) {
        alert('error')
    } else {
        const message = `Имя: ${user_name.value}\nНомер: ${phone_user.value}\nGmail: ${email_user.value}\nИз какого Города, Страны клиент: ${sity_user.value}\nВизу какой страны хочет получить: ${sity.value}`;
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
        modal_visa.style.opacity = '0'
        modal_visa.style.transition = '0.5s'
        setTimeout(() => {
            modal_visa.style.opacity = '1'
            modal_visa.classList.toggle('visa_mod_off')
        }, 300);
    }


}