import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from '../styles/Form.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';


function Form () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [isMessageSent,setIsMessageSent] = useState(false)
    let messageSent;
    const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ryyj3km', 'template_2ki87vq', form.current, 'UMuUqkIbrmeMO6CNZ')
          .then((result) => {
              console.log(result.text);
              console.log('Message Sent')
              setIsMessageSent(true)
              setName('');
              setEmail('');
              setMessage('');
  
          }, (error) => {
              console.log(error.text);
          });
      };

      if (isMessageSent) {
        messageSent = (<p className={styles.message}>Thank you for your message!</p>)
      }
    
      return (
        <div>
          <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
              <input type="text" name="user_name" placeholder='Name'required onChange={(e) => setName(e.target.value)} value={name} />
              <input type="email" name="user_email"placeholder='Email' required onChange={(e) => setEmail(e.target.value)} value={email}/>
              <textarea className={styles.input} name="message" placeholder='Your message' rows={5} cols={40} required onChange={(e) => setMessage(e.target.value)} value={message}/>
              <button className={styles.button} type="submit" value="Send">SEND<FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/></button>
          </form>
          {messageSent}
        </div>
      )
    };
    
    export default Form;




      //     return (
      //   <div>
      //     <form ref={form} onSubmit={sendEmail} className={styles.formContainer}>
      //         <input type="text" name="user_name" placeholder='Name'required />
      //         <input type="email" name="user_email"placeholder='Email' required />
      //         <textarea className={styles.input} name="message" placeholder='Your message' rows={5} cols={40} required />
      //         <button className={styles.button} type="submit" value="Send">SEND<FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/></button>
      //     </form>
      //     {messageSent}
      //   </div>
      // )
    