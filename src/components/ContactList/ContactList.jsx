import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"

export default function ContactList() {

    const contacts = useSelector(state => state.contacts.items)
    const filter = useSelector(state => state.filters.name)

    const filteredContact = contacts.filter(contact => contact.userInfo.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul className={css.list}>
            {filteredContact.map((contact) => <li key={contact.id}><Contact contact={contact} /></li>)}
        </ul>
    )
    
}