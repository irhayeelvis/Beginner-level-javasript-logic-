let start = 10; 
function countdown(x) {
    console.log(x);
    if (x < 1) {
        return x;
    } else {
        x--;
        countdown(x);
    };
};

countdown(start);