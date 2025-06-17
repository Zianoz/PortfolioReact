import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <section>
            <div class="wrapping">
              <div class="contact-text">
                <h1>Chat with me!</h1>
              </div>

              <form class="contact-form">
                <div class="input-group">
                  <input type="text" name="name" id="name" required placeholder="Name*" />
                </div>
                <div class="input-group">
                  <input type="email" name="email" id="email" required placeholder="Email*" />
                </div>
                <div class="input-group">
                  <input type="text" name="topic" id="topic" required placeholder="Topic*" />
                </div>
                <div class="input-group">
                  <textarea name="message" id="message" required placeholder="Message*"></textarea>
                </div>
                <div class="input-group">
                    <button class="submit-btn">Submit</button>
                </div>
              </form>
      <Footer />  
            </div>
        </section>
      </main>
    </>
  );
}

export default Contact;