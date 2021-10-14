import React from 'react';
import Contact from './Contact';

const ContactList = ({contatti, delContact}) => {
    return (
        <ul style={{
            listStyleType: "none",
            paddingRight: "32px",
            backgroundColor: "azure",
            margin: "15px"
        }}>
                
            {contatti.map(contatto => (
                <Contact
                    key={contatto.id}
                    contatto={contatto}
                    delContact={delContact}
                    
                />
            ))
            }
        </ul>
        
    );
}

export default ContactList