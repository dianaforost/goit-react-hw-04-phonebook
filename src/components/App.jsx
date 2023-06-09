import React, {useState, useEffect} from 'react';
import SectionFirst from './Section/SectionFirst';
import SectionSec from './Section/SectionSec'
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
export function App(){
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ? JSON.parse(localStorage.getItem('contacts')) : [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
          {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
          {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
          {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}];
  });
        const [filter, setFilter] = useState('');
        
        useEffect(() =>{
          window.localStorage.setItem('contacts', JSON.stringify(contacts))
        }, [contacts])
    
const onSubmitForm =({name, number}) =>{

      const isNameExist = contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());
      const isNumberExist = contacts.some((contact) => contact.number.toLowerCase() === number.toLowerCase());

  if (isNameExist) {
    alert(`${name} is already in contacts`);
  } else if(isNumberExist){
    alert(`Number ${number} is already exist`);
  }else {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([newContact, ...contacts]);
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }


    }
    const onChange = evt => {
      setFilter(evt.currentTarget.value.toLowerCase())
};

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );
const onDeleteContact = id =>{
  setContacts(contacts.filter((i) => i.id !== id))

}
    return (
      <div
      style={{
        height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding:'10px 0px'
            }}
          >
      <SectionFirst title="My Phonebook" href='../icons/symbol-defs.svg#icon-profile'>
        <PhoneBook onSubmitForm={onSubmitForm}/>
      </SectionFirst>
      <SectionSec title="Contacts">
        {contacts.length > 1 && (
          <Filter value={filter} onChange={onChange}/>
          )}
          {contacts.length > 0 ? (
            <Contacts contacts={filteredContacts} onDeleteContact={onDeleteContact}/>
            ) : (
              <p>Your phonebook is empty.Please add a new contact.</p>
              )}
            </SectionSec>
      </div>
      );
    }
    
