import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { Item, Button } from "components/ContactItem/ContactItem.styled";

export const ContactItem = ({ contact }) => { 
    const { id, name, number } = contact;
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(id));

    return (
        <Item>
            {name} {number}
            <Button
                type="button"
                onClick={handleDelete}>
                Delete
            </Button>
        </Item>
    )
}