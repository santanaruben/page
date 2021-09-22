import React from 'react';
import emailjs from 'emailjs-com';
import './css/correo.css';

export default function Correo() {

  function sendEmail(e) {
    e.preventDefault();
    window.Spinner.colocar();

    emailjs.sendForm('service_b5p5kxb', 'template_pg5umlj', e.target, 'user_MZ9TV3NwdAxHZ8Hn8ADhT')
      .then((result) => {
        window.Spinner.quitar();
        document.getElementById("submit").value='Your message has been sent';
        // document.getElementById("submit").style
          document.getElementById("formularioCorreo").reset();
          // alert('Your message has been sent')
          console.log(result.text);
      }, (error) => {
        window.Spinner.quitar();
        document.getElementById("submit").value='Your message has not been sent. Try again later!';
          // alert('Your message has not been sent. Try again later!')
          console.log(error.text);
      });
  }

  return (
    <>

<p className='tituloForm'>CONTACT ME</p>

<form id="formularioCorreo" className="topBefore" onSubmit={sendEmail}>
  <input type="hidden" name="to_name" value='Ruben' />
  <input type="text" name="from_name" placeholder="NAME" required />
  <input type="email" name="reply_to" placeholder="E-MAIL" required />
  <textarea name="message" type="text" placeholder="MESSAGE" required />
  <input id="submit" type="submit" value="SEND!" />
</form>

</>
  );
}