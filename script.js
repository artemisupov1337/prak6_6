document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Забороняємо браузеру перезавантажувати сторінку

    // Отримуємо введену користувачем адресу e-mail
    const email = document.getElementById('email').value;

    // Тут можна додати код для відправлення адреси e-mail на сервер або обробки її якось інакше
    // В цьому прикладі просто виведемо введену адресу в консоль
    console.log('Адреса e-mail для підписки:', email);

    // Очищаємо поле вводу після відправлення
    document.getElementById('email').value = '';

    // Можна також відобразити підтвердження успішної відправки, наприклад:
    alert('Ви успішно підписалися на розсилку!');
});