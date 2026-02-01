// Count down timer to launch paramedy

const endDate = "April 29, 2026";
function countdown() {
    const date = new Date();
    const total = Date.parse(endDate) - date;
    const days  = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return {
        days,
        hours,
        minutes,
        seconds
    };
};

function update() {
    let temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property}:${temp[property]} `);
    };
    console.log(output);
    setTimeout(update, 1000);
}

update();