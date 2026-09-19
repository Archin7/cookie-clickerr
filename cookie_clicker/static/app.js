if (localStorage.getItem("cookies") === null) {
  localStorage.setItem("cookies", 0);
  localStorage.setItem("upgrade_click", 1);
  localStorage.setItem("upgrade_autoclick", 0);
}

let cookies = Number(localStorage.getItem("cookies"));
let click_boost = Number(localStorage.getItem("upgrade_click"));
let autoclick = Number(localStorage.getItem("upgrade_autoclick"));

let click_price = 10;
let autoclick_price = 15;

function more_cookies() {
  cookies += click_boost;
}

function upgrade_button() {
  if (cookies >= click_price) {
    click_boost++;
    cookies -= click_price;
  }
}

function upgrade_autoclick() {
  if (cookies >= autoclick_price) {
    autoclick++;
    cookies -= autoclick_price;
  }
}

function save() {
  localStorage.setItem("cookies", cookies);
  localStorage.setItem("upgrade_click", click_boost);
  localStorage.setItem("upgrade_autoclick", autoclick);
}

function loop() {
  let winstatus = document.getElementById("status");
  winstatus.innerHTML = "Cookies: " + cookies + "<br>";
  winstatus.innerHTML += "Upgrade level: " + click_boost + "<br>";
  winstatus.innerHTML += "Autoclick level: " + autoclick + "<br>";

  document.getElementById("button_upgrader").innerHTML =
    "Upgrade button: " + click_price + "C";

  document.getElementById("autoclick_upgrader").innerHTML =
    "Upgrade autoclick: " + autoclick_price + "C";

  click_price = Math.floor(10 * Math.pow(1.15, click_boost - 1));
  autoclick_price = Math.floor(15 * Math.pow(1.18, autoclick));

  // Checks
  if (cookies >= 10) {
    document.getElementById("button_upgrader").style.display = "block";
  }
  if (cookies >= 15) {
    document.getElementById("autoclick_upgrader").style.display = "block";
  }
}

let intervalId = setInterval(loop, 100); // Run loop
let autoclickInterval = setInterval(() => {
  cookies += autoclick;
}, 1000);
