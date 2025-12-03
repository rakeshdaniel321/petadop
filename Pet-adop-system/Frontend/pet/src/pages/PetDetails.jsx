import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/pets/${id}`)
      .then(res => res.json())
      .then(data => setPet(data));
  }, [id]);

  if (!pet) return <p>Loading...</p>;

  return (
    <div className="pet-details">
      <img src={`http://localhost:5000/uploads/${pet.image}`} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p><strong>Breed:</strong> {pet.breed}</p>
      <p><strong>Age:</strong> {pet.age}</p>
      <p>{pet.description}</p>
    </div>
  );
}

export default PetDetails;