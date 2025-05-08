window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const typedText = document.getElementById('typed-text');
  
    const message = `Tarish, I want you to know how much I appreciate our time together. 
  You’ve come such a long way, from being someone who was short-tempered to someone who's now one of my closest friends.
  
  During our last moments in school, I could see how much you’ve changed and become more positive, and I’m so glad for that. 
  I’m proud of the person you’ve become.
  
  Wishing you all the best on your birthday and beyond!
  
  – Chanukya`;
  
    // Fade out loading screen after 4s
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
  
      setTimeout(() => {
        loadingScreen.style.display = 'none';
        mainContent.classList.add('fade-in');
        typeMessage(message, typedText, 0, 35); // Start typing
      }, 1000); // Wait for fade out animation
    }, 4000);
  });
  
  // Typing effect
  function typeMessage(msg, element, index, speed) {
    if (index < msg.length) {
      element.textContent += msg.charAt(index);
      setTimeout(() => {
        typeMessage(msg, element, index + 1, speed);
      }, speed);
    }
  }
  