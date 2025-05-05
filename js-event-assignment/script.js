// Button click
document.getElementById('magicBtn').addEventListener('click', () => {
    const p = document.getElementById('clickResult');
    p.textContent = 'Hello, You clicked the button!';
    p.style.color = 'green';
  });
  
  // Hover effect (image)
  document.getElementById('hoverImg').addEventListener('mouseover', () => {
    document.getElementById('hoverImg').src = 'https://images.pexels.com/photos/31357180/pexels-photo-31357180/free-photo-of-modern-streetlights-against-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  });
  document.getElementById('hoverImg').addEventListener('mouseout', () => {
    document.getElementById('hoverImg').src = 'https://images.pexels.com/photos/31357180/pexels-photo-31357180/free-photo-of-modern-streetlights-against-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
  });
  
  // Keypress detection
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      alert('⏎ You pressed Enter!');
    }
  });
  
  // Double-click secret
  document.getElementById('magicBtn').addEventListener('dblclick', () => {
    alert('Secret double-click unlocked!');
  });
  
  // Tab content switch
  document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.getElementById('tab-content').textContent = `You selected Tab ${tab.dataset.tab}`;
    });
  });
  
  // Form validation
  document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('formMessage');
  
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.textContent = '❌ Invalid email format';
      message.style.color = 'red';
    } else if (password.length < 8) {
      message.textContent = '🔒 Password must be at least 8 characters';
      message.style.color = 'orange';
    } else {
      message.textContent = '✅ Form submitted successfully!';
      message.style.color = 'green';
    }
  });
  