const fs = require('fs');

let i = 0;
while (i < 16) {
  fs.rename((i + 1) + '.jpeg', i + '.jpeg', () => {});
  i++;
}
