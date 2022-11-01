const refs = {
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('.feedback-form textarea'),
}
console.log(refs.form);
console.log(refs.textarea);
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);


populateTexarea()

function onTextareaInput (evt) {
    const massage = evt.currentTarget.value;

    localStorage.setItem('feedback-form-state', massage);
}

function onFormSubmit (evt) {
    evt.preventDefault();
    console.log('отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state')
}

function populateTexarea(){
    const savedMAssage = localStorage.getItem('feedback-form-state')
    if (savedMAssage){
        refs.textarea.value = savedMAssage;
    }
}