let value = 0;
let interval = null;

function counting() {
    value++;
    console.log({counter: value});
    
    if (value === 10) {
        clearInterval(interval);
    }
}

interval = setInterval(counting, 2000);