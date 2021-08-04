import React,{useEffect} from "react";
import Contact from "./Contact";


const contacts = [{
    firstName:"Барней",
    lastName:"Стинсовський",
    phone:"+380956319521",
    gender:"male"
}, 
{
    firstName:"Робін",
    lastName:"Щербатська",
    phone:"+380931460123",
    gender:"female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName:"Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}
];


const Contacts = () => {

//   const [contact, setContact] = useEffect();
  
    return(

       <div className="wrapper">
           <div className="contact">
               <span>Contacts</span>
           </div>
           <div className="input">
               <input type="text" placeholder="search" />
           </div>
            <div className="contacts_wrapper">{contacts.map(contact => 
                <Contact firstName={contact.firstName}
                lastName = {contact.lastName}
                phone = {contact.phone}
                gender = {contact.gender}
                />)}
            </div> 
        </div>
    )
}

export default Contacts;
