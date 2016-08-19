var delay = 0;
function print(string, delay) {
  setTimeout(function () {
    console.log(string);
  }, delay);
  delay += 500;
}

print('The computer has been hacked');
print('The hacker has deployed a virus');
print('You (Simme Pinne) are f**ked');
