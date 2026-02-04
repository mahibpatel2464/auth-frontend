import { logout } from "../services/authService";

function Dashboard() {
  return (
    <div>
      <h2>Welcome to Dashboard 🔒</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
