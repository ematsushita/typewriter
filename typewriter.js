const sentence = "hello there from lighthouse labs";
let delay = 950;

for (const char of sentence) {
  delay += 50;
  setTimeout(() => {
    process.stdout.write(char)
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
};

setTimeout(() => {
  console.log("");
}, delay + 50);