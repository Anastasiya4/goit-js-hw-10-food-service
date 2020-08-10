const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

      const checkbox = document.querySelector('.js-switch-input');
      const body = document.querySelector('body');
      const colorTheme = localStorage.getItem('theme');

  checkbox.addEventListener('change', themeChenger)

  function themeChenger(event) {
      if(event.target.checked){
          darkTheme();
      }
      else{
          lightTheme();
      }
  };

  const darkTheme = () =>{
      body.classList.remove(Theme.LIGHT);
      localStorage.setItem('theme', Theme.DARK);
      body.classList.add(Theme.DARK);
  };

  const lightTheme = () =>{
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
    body.classList.add(Theme.LIGHT);
};

function localStorageChecker(){
    if(colorTheme){
        body.classList.add(colorTheme);
    if (colorTheme === Theme.DARK) {
        input.checked = true;
      } else {
        ('');
      }
}};

localStorageChecker();