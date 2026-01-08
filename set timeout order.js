let arrow = (x = "one") => console.log(x);
let arrow2 = (y = "two") => console.log(y);

function output() {
    console.log("three");
    arrow();
    arrow2();
};

function output2() {
    console.log("four");
    setTimeout(arrow, 1000);
    setTimeout(output);
};

output2();