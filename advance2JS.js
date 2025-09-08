//gererator Iterator

function* numberGererator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

let gen = numberGererator();

for (let index = 0; index < 5; index++) {
    console.log(gen.next().value);
}


