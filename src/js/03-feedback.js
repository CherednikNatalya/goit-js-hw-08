import throttle from 'lodash.throttle'


const STORAGE_KEY = 'feedback-form-state';

const formData = {};

initPage();


formRef = document.querySelector('.feedback-form')
// textarea: document.querySelector('.feedback-form textarea'),


// console.log(refs.form.elements.email);
// console.log(refs.form.elements['message']);


const onFormInput = evt => {
    const {name, value} = evt.target;
    try {
        let saveData = localStorage.getItem(STORAGE_KEY);
        if (saveData) {
            saveData = JSON.parse(saveData);
        } else {
            saveData = {};
        }

        saveData[name] = value;
        const stringifyData = JSON.stringify(saveData)
        localStorage.setItem(STORAGE_KEY, stringifyData)
    
    } catch (error) {}
    };


// refs.form.addEventListener('submit', throttle(onFormSubmit, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

formRef.addEventListener('input', onFormInput);

function initPage(){
    const saveData = localStorage.getItem(STORAGE_KEY);
    if(!saveData) {
        return
    }
        try {
            const parseData = JSON.parse(saveData);
            Object.entries(parseData).forEach (([name, value])=>{
                formRef.elements[name].value = value
            })
           
        } catch (error) {
        //   console.log(error);
        }
}


// populateTexarea();

// function onTextareaInput (evt) {
//     const massage = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, massage);
// }

// function onFormSubmit (evt) {
//     evt.preventDefault();
//        evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY)
// }

// function populateTexarea(){
//     const savedMAssage = localStorage.getItem(STORAGE_KEY)
//     if (savedMAssage){
//         refs.form.value = savedMAssage;
//     }
// }