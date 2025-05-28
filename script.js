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
    return (
        (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
            Date.UTC(date.getFullYear(), 0, 0)) /
        24 /
        60 /
        60 /
        1000
    );
}

document.getElementById("name").innerHTML = getTodayName();
