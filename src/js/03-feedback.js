import throttle from 'lodash.throttle'


const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('.feedback-form textarea'),
};


refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY)
    console.log(formData);
});

populateTexarea();

function onTextareaInput (evt) {
    const massage = evt.target.value;

    localStorage.setItem(STORAGE_KEY, massage);
}

function onFormSubmit (evt) {
    evt.preventDefault();
    console.log('отправляем форму');
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function populateTexarea(){
    const savedMAssage = localStorage.getItem(STORAGE_KEY)
    if (savedMAssage){
        refs.textarea.value = savedMAssage;
    }
}