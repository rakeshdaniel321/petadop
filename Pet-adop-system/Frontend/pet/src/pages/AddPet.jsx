import { useState } from 'react';

function AddPet() {
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    age: '',
    description: '',
    image: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    await fetch('http://localhost:5000/api/pets', {
      method: 'POST',
      body: data,
    });

    alert('Pet added!');
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h2>Add New Pet</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="breed" placeholder="Breed" onChange={handleChange} required />
      <input name="age" placeholder="Age" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="file" name="image" onChange={handleChange} accept="image/*" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddPet;