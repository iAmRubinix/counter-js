var counter = document.getElementById('main-counter');

counter.innerHTML = 0;

function increment() {
    this.counter.innerHTML = Number(this.counter.innerHTML) + 1
};

function decrement() {
    this.counter.innerHTML = Number(this.counter.innerHTML) - 1
};

function restore() {
    this.counter.innerHTML = 0;
};