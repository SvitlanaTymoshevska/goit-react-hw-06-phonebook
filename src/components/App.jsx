//  import { useState, useEffect  } from "react";
import { Wrapper, TitlePhonebook, TitleContacts } from "components/App.styled";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

export const App = () => {
  // const [contacts, setContacts] = useState(() => {return JSON.parse(localStorage.getItem("contacts")) ?? []});

  // useEffect(
  //   () => { 
  //     localStorage.setItem("contacts", JSON.stringify(contacts));
  //   }, [contacts]);

  return (
    <Wrapper>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </Wrapper>
  ); 
};