// Nomor 4
import useForm from "./useForm";

function Form() {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
  });

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <p>Nama: {values.name}</p>
      <p>Email: {values.email}</p>
    </div>
  );
}

export default Form;
