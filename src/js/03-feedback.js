import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.querySelector('[name="email"]');
const message = form.querySelector('[name="message"]');

const localForm = "feedback-form-state";

form.addEventListener('input', Throttle(storageFormData, 500));
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    // console.log(event.currenTarget.elements.value)
    const saveData = JSON.parse(localStorage.getItem(localForm));

    console.dir(saveData);
    
        
    localStorage.removeItem(localForm);
    event.currentTarget.reset();

}

function storageFormData(event) {
    const formValue = { email: '', massage: '' };

   if (localStorage.getItem(localForm)) {
        Object.assign(formValue, JSON.parse(localStorage.getItem(localForm)))
   }
    
    formValue[event.target.name] = event.target.value;
 //console.log(formValue)
    
    localStorage.setItem(localForm, JSON.stringify(formValue))
    
}