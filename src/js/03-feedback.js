import throttle from 'lodash.throttle'

formRef = document.querySelector('.feedback-form')
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

console.log(formRef.elements.email);
console.log(formRef.elements.message);

initPage();

const onFormInput = evt => {
    const {name, value} = evt.target;   
try {
   let saveData = localStorage.getItem(STORAGE_KEY); 
    if(saveData)  {
        saveData  = JSON.parse(saveData)   
    } else {
        saveData = {}
    }
    saveData[name] = value
    const stringifyData = JSON.stringify(saveData)
        localStorage.setItem(STORAGE_KEY, stringifyData)
} catch (error) {
    console.log(error);
}
} 

formRef.addEventListener('input', throttle(onFormInput, 500));
 
function initPage(){
    const saveData = localStorage.getItem(STORAGE_KEY);
    if(!saveData) {
        return
    }
        try {
            const parseData = JSON.parse(saveData);
            Object.entries(parseData).forEach (([name, value])=>{
            formRef.elements[name].value = value
            });   
        } catch (error) {
           console.log(error); 
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault()

        const {elements: {email, message}} = evt.currentTarget;
        console.log({email: email.value, message:message.value});
        evt.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY)
    }

    formRef.addEventListener('submit',handleSubmit )















