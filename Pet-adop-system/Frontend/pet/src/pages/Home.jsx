import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch pets from the backend
    fetch('http://localhost:5000/api/pets')
      .then(res => res.json())
      .then(data => setPets(data))
      .catch(err => console.error('Failed to fetch pets:', err));
  }, []);

  return (
    <div className="home-container">
      <h2 className="section-title">Available Pets for Adoption</h2>
      <div className="pet-list">
        {pets.length === 0 ? (
          <p>No pets available at the moment.</p>
        ) : (
          pets.map(pet => (
            <Link to={`/pet/${pet._id}`} key={pet._id} className="pet-card">
              <img
                src={`http://localhost:5000/uploads/${pet.image}`}
                alt={pet.name}
                className="pet-image"
              />
              <h3>{pet.name}</h3>
              <p>{pet.breed}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;