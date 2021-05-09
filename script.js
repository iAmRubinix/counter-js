var counter = document.getElementById('main-counter');

counter.innerHTML = 0;

function increment() {
    this.counter.innerHTML++
};

function decrement() {
    this.counter.innerHTML--
};

function restore() {
    this.counter.innerHTML = 0;
};