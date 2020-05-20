import React from 'react'
import ContactForm from '../../components/contact_form/ContactForm'

class Contact extends React.Component {
  render(){
    return (
      <div className="contact">
        <div className="container">
          <h1>Contact us</h1>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact