import { auth } from './firebase-config.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { logAction } from './logger.js';

export function loadNavbar(){
  const navbarContainer = document.getElementById('dynamic-navbar');
  if(!navbarContainer) return;

  const role = localStorage.getItem('userRole') || 'citizen';

  let navItems = '';

  if(role === 'citizen'){
    navItems = `
        <a href="dashboard-citizen.html" class="nav-link">Home</a>
        <a href="apply-service.html" class="nav-link">Apply for Service</a>
        <a href="my-applications.html" class="nav-link">My Applications</a>
        <a href="profile.html" class="nav-link">My Profile</a>
    `;
  } else if(role === 'staff'){
    navItems = `
        <a href="dashboard-staff.html" class="nav-link">Dashboard</a>
        <a href="view-all-applications.html" class="nav-link">All Applications</a>
    `;
  } else if(role === 'officer'){
    navItems = `
        <a href="dashboard-officer.html" class="nav-link">Dashboard</a>
        <a href="manage-services.html" class="nav-link">Manage Services</a>
        <a href="view-all-applications.html" class="nav-link">All Applications</a>
    `;
  }

  navbarContainer.innerHTML = `
      <nav class="navbar">
          <div class="nav-brand">
              <h3>Digital E-Gram Panchayat</h3>
          </div>
          <div class="nav-menu">
              ${navItems}
              <button id="logout-btn" class="logout-btn">Logout</button>
          </div>
      </nav>
  `;

  document.getElementById('logout-btn').addEventListener('click', async () => {
      if (confirm('Are you sure you want to logout?')) {
          await logAction('User Logout', { email: auth.currentUser?.email });
          await signOut(auth);
          localStorage.clear();
          window.location.href = 'index.html';
      }
  });
}