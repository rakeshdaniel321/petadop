import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">🏠</Link></li>
          <li><Link to="/add-pet">➕</Link></li>
          <li><Link to="/about">ℹ</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;