// Our goal is to animate the sentence, revealing one character at a time.
// This would make it look as though it is being typed in by someone.

const sentence = "hello there from lighthouse labs\n";
let seconds = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, seconds);
  seconds += 50;
}