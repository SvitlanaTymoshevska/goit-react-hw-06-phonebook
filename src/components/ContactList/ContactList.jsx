import { useSelector } from "react-redux";
import { ContactItem } from "components/ContactItem/ContactItem";
import { getContacts, getFilter } from "redux/selectors";

const getFiltredContacts = (contacts, filter) => {
if (!filter) {
    return contacts;
}

const filterLowerCase = filter.toLowerCase();
return contacts.filter(contact => contact.name.toLowerCase().includes(filterLowerCase));
};

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const filtredContacts = getFiltredContacts(contacts, filter);

    return (
        <ul>
            {filtredContacts.map(contact => (
                <ContactItem
                    key={contact.id}
                    contact={contact}
                />
            ))}
        </ul>
    );
};
