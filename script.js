const names = ["Paula", "Pau", "Nica", "Polnics"];

function seededRandom(s) {
  return function () {
    s = Math.sin(s) * 10000;
    return s - Math.floor(s);
  };
}

function getTodayName() {
  let min = 0;
  let max = names.length - 1;

  let rand = seededRandom(daysIntoYear(new Date()));
  // rand = seededRandom(126);
  let randomIndex = Math.floor(min + rand() * (max - min + 1));

  return names[randomIndex];
}

function daysIntoYear(date) {
  const start = new Date(date.getFullYear(), 0, 0); // Jan 0 = Dec 31 previous year
  const diff =
    date -
    start +
    (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

document.getElementById("name").innerHTML = getTodayName();
