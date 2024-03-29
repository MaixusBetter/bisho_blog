// Reading the nesscary HTML ids
const darkModeToggle = document.getElementById('dark-mode-toggle');
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
const submitButton = document.getElementById('submitButton');

//aapends the dark-mode class to body
if (isDarkMode) {
  document.documentElement.classList.add('dark-mode');
}

//Makes sure dark-mode is appled globally throughout the file
darkModeToggle.addEventListener('click', function() {
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('dark-mode', !isDarkMode);
  document.documentElement.classList.toggle('dark-mode');
});


// Register th logo from html
const logo = document.querySelector('.logo'); 

//updats the logo when dark mode is applied
function updateLogoForDarkMode(isDarkMode) {
  if (isDarkMode) {
    logo.classList.add('dark-mode');
  } else {
    logo.classList.remove('dark-mode');
  }
}

//Reads user input in order to change the logo
darkModeToggle.addEventListener('click', function() {
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  updateLogoForDarkMode(isDarkMode);
});

//Calls the function set above
updateLogoForDarkMode(isDarkMode); 

//Re-directs th user to the main blog after posting
submitButton.addEventListener('click', function() {
    window.location.href = "blog.html";
  });