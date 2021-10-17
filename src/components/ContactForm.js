import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let isMail = document.getElementById("not-mail");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      isMail.style.display = "none";
      return true;
    } else {
      isMail.style.display = "block";
      isMail.style.animation = "dongle 1s";
      setTimeout(() => {
        isMail.style.animation = "none";
      }, 1000);
      return false;
    }
  };

  const failMessage =(msg) =>{
    let formMess = document.querySelector(".formMessage");
     
    formMess.innerHTML= msg
    formMess.style.opacity='1'
    formMess.style.background ='rgb(253,87,87)'

    document.getElementById('name').classList.add('error')
    document.getElementById('email').classList.add('error')
    document.getElementById('message').classList.add('error')

  }

  const successMessage =() =>{
    let formMess = document.querySelector('.formMessage')

    formMess.innerHTML='Message envoyé ! nous vous rencontacterons dès que possible.'
    formMess.style.background='#00c1ec'
    formMess.style.opacity='1'

    document.getElementById('name').classList.remove('error')
    document.getElementById('email').classList.remove('error')
    document.getElementById('message').classList.remove('error')
    
    setTimeout(() => {
      formMess.style.opacity='0'
    },5000)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback("template_5w4hhjm",{
        name,
        email,
        message,
      })
    }else {
      failMessage('Merci de repmlir correctement les champs requis * ')
    }
  }
  const sendFeedback =(templateId,variables) =>{
      emailjs.send("service_4jbef6b","template_5w4hhjm"
          // your service ID :service_4jbef6b

          // your template ID : template_5w4hhjm
    
          // your user ID (protégé par .env)
          // process.env.REACT_APP_EMAILJS_KEY
        ).then((res) => {
            successMessage()
            setName("");
            setEmail("");
            setMessage("");
          }).catch((err) => {
              failMessage("Une erreur s'est produite, veuillez réessayer.")
          }
        );
    } 

  return (
    <form className="contact-form">
      <h3>Contactez-moi</h3>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
        />
        <div className="email-content">
          <label id="not-mail">Email non valide</label>
          <input
            type="mail"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <div >
      <input
        className="buttonForm"
        type="submit"
        value="envoyer"
        onClick={(e) => handleSubmit(e)}
      />
      <div className="formMessage"></div>
      </div>
    </form>
  );
};

export default ContactForm