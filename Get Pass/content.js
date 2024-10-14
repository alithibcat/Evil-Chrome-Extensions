document.addEventListener("DOMContentLoaded", () => {
  const passField = document.querySelector("input[type='password']");
  
  if (passField) {
    const observer = new MutationObserver(() => {
    
        console.log("Password input changed: ", passField.value);
    
    });
    
    observer.observe(passField, { attributes: true, childList: true, subtree: true });
    
    passField.addEventListener("input", (event) => {
      debugger;
      console.log("Password input via listener: ", event.target.value);
    });
  }
});
