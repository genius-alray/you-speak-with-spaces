const { existsSync, readFileSync, writeFileSync } = require("fs");
function youSpeakWithSpaces(text,spaces=1) {
  let lis = text.split('');
  return lis.join(' '.repeat(spaces))
}
if (existsSync('./text.txt')) {
  let file = readFileSync("./text.txt").toString()
  let src = file.split('\n').slice(1).join('').replace('\n', '')
  let spaces = file.split('\n')[0]
  writeFileSync('./out.txt',youSpeakWithSpaces(src,spaces))
}
