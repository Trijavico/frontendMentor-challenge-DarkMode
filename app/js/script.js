const $rdbutton = document.querySelectorAll("input[name='theme']");
const $btn_dark = document.getElementById('dark');
const $btn_light = document.getElementById('light');

const themeLocalStorage = () => window.localStorage.getItem('color-theme');
const themePrefersColors = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';


function setBodyTheme(theme) {
    console.log(theme);
    document.querySelector('body').classList = theme;
}

function setToggleBtn(theme) {
    (theme === 'dark') 
        ? $btn_dark.checked = true
        : $btn_light.checked = true;
}

function loadTheme(){
    const theme = themeLocalStorage() || themePrefersColors();
    setBodyTheme(theme);
    setToggleBtn(theme);
};


$rdbutton.forEach( btn =>{
    btn.addEventListener('click', function(e) {

        if($btn_dark.checked){
            window.localStorage.setItem('color-theme', 'dark');
            setBodyTheme($btn_dark.id)
        }else{
             window.localStorage.setItem('color-theme', 'light');
             setBodyTheme($btn_light.id);
        }
        
    });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    event.matches 
        ? $btn_dark.checked = true 
        : $btn_light.checked = true;
});

loadTheme();