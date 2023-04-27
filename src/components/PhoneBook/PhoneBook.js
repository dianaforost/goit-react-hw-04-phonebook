import React,  {useState} from 'react';
import propTypes from 'prop-types';
import css from './PhoneBook.module.css';
export default function PhoneBook({onSubmitForm}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

const onSubmit =(e) =>{
        e.preventDefault();
        onSubmitForm({name,number})
        const form = e.target;
        form.reset();
        formReset();
}
const formReset = () => {
  setName('');
  setNumber('');
};

 const onChangeName = e =>{
  setName(e.currentTarget.value.trim())

 }
 const onChangeNumber = e =>{
  setNumber(e.currentTarget.value.trim())

 }
  return <form onSubmit={onSubmit} className={css.form}>
      <label htmlFor="name">Name</label>
  <input
  className={css.inputName}
type="text"
name="name"
onChange={onChangeName}
placeholder="Like Name Surname"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
autoComplete='off'
required
/>
<label htmlFor="number">Number</label>
<input
className={css.inputNumber}
type="tel"
name="number"
onChange={onChangeNumber}
placeholder="Like 111-11-11"
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
autoComplete='off'
required
/>
<button type="submit" className={css.btn}>Add contact</button>
  </form>
}

PhoneBook.propTypes ={
  onSubmit : propTypes.func,
  onChange : propTypes.func,
}