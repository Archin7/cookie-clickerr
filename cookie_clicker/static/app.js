let cookies = 0;
let click_boost = 1;
let autoclick = 0;

let upgrade_click_cost = 10;
let upgrade_autoclick_cost = 15;

function more_cookies() {
  cookies += click_boost;
}

function upgrade_button() {
  if (cookies >= upgrade_click_cost) {
    click_boost++;
    upgrade_click_cost;
    cookies -= 10;
  }
}

function upgrade_autoclick() {
  if (cookies >= upgrade_autoclick_cost) {
    autoclick++;
    upgrade_autoclick_cost++;
    cookies -= 15;
  }
}

function loop() {
  let winstatus = document.getElementById("status");
  winstatus.innerHTML = "Cookies: " + cookies + "<br>";
  winstatus.innerHTML += "Upgrade level: " + click_boost + "<br>";
  winstatus.innerHTML += "Autoclick level: " + autoclick + "<br>";

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
