import throttle from 'lodash.throttle'


const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
form: document.querySelector('.feedback-form'),
textarea: document.querySelector('.feedback-form textarea'),
};


refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, evt.target.value )
    console.log(formData);
});

populateTexarea();

function onTextareaInput (evt) {
    const massage = evt.target.value;
    localStorage.setItem(STORAGE_KEY, massage);
}

function onFormSubmit (evt) {
    evt.preventDefault();
       evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function populateTexarea(){
    const savedMAssage = localStorage.getItem(STORAGE_KEY)
    if (savedMAssage){
        refs.form.value = savedMAssage;
    }
}