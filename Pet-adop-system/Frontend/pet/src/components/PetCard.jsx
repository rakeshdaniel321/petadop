import { Link } from 'react-router-dom';

function PetCard({ pet }) {
  return (
    <Link to={`/pet/${pet._id}`} className="pet-card">
      <img src={`http://localhost:5000/uploads/${pet.image}`} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.breed}</p>
    </Link>
  );
}

export default PetCard;