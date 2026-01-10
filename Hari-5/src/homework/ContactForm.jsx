// Nomor 3
import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <input
        name="firstName"
        placeholder="Nama Depan"
        value={form.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        placeholder="Nama Belakang"
        value={form.lastName}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <hr />
      <p>Preview:</p>
      <p>{form.firstName} {form.lastName}</p>
      <p>{form.email}</p>
    </div>
  );
}

export default ContactForm;
