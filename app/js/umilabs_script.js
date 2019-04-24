$(function(){
    $('.introduce__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 10
            },
            phone: {
                required: true,
                minlength: 9,
                number: true
            }
        },
        messages: {
            name: {
                required: "Поле 'Фамилия и имя' обязательно к заполнению",
                minlength: "Введите не менее 10-х символов в поле 'Имя'"
            },
            email: {
                required: "Поле 'Электронная почта' обязательно к заполнению",
                email: "Необходим формат адреса email"
            },
            phone: {
                required: "Поле 'Телефон' обязательно к заполнению",
                minlength: "Введите не менее 9-ти цифр в поле 'Телефон'",
                number: "Введите необходимый формат телефона"
            }
        }
    });
});