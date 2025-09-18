const Root = document.getElementById("root");

const logo = document.createElement('div');
logo.id = 'logo';
Root.appendChild(logo);

const welcome = document.createElement('div');
welcome.id = 'welcome';
welcome.className = 'welcome';
welcome.innerText = 'به کافه آشو خوش آمدید'
Root.appendChild(welcome)

function animationFunction() {
    welcome.classList.add("animation-text");
    logo.classList.add("animation-first-page");
}
setTimeout(animationFunction, 1000);
setTimeout(() => {
    Root.innerHTML = "";
}, 4100);
const menu = document.createElement('div');
menu.id = "menu";
menu.className = "menu";
Root.appendChild(menu);

for (let item = 0; item < 5; item++) {
    const newItem = document.createElement('div');
    newItem.id = `box-${item}`
    newItem.className = "menu-item"
    menu.appendChild(newItem);
}
