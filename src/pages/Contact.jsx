import '../style/contact.css'
import  { useState } from 'react';


import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: "",
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfoliobackend-2-7wi5.onrender.com/contact', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '',subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="subject">Subject: </label>
        <textarea
          name="subject"
          placeholder="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
       <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;