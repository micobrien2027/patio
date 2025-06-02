// Import routing and styles
import { Link, useLocation } from 'react-router-dom';
import './BottomNav.css';

// Bottom navigation component
export default function BottomNav() {
  const location = useLocation(); // Get current route

  return (
    // Navigation container
    <nav className="bottom-nav">
      {/* Leaderboard tab */}
      <div className="nav-item">
        <Link to="/leaderboard" className={location.pathname === '/leaderboard' ? 'active' : ''}>🏆</Link>
      </div>

      {/* Home/game tab */}
      <div className="nav-item">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>🎮</Link>
      </div>

      {/* CPU/house tab */}
      <div className="nav-item">
        <Link to="/house" className={location.pathname === '/house' ? 'active' : ''}>🤖</Link>
      </div>

      {/* Ongoing bets tab */}
      <div className="nav-item">
        <Link to="/ongoing" className={location.pathname === '/ongoing' ? 'active' : ''}>⏳</Link>
      </div>

      {/* Messages tab */}
      <div className="nav-item no-border">
        <Link to="/messages" className={location.pathname === '/messages' ? 'active' : ''}>💬</Link>
      </div>

      {/* Profile tab */}
      <div className="nav-item no-border">
        <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>👤</Link>
      </div>
    </nav>
  );
}

