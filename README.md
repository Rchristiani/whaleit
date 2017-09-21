# Whaleit

Have a whale of a time with this transform stream. Replace any whales with 🐳 in all your text!

### Useage

```
    npm i --save whaleit
```

In your code.

```
const Whaleit = require('whaleit');

const whaleit = new Whaleit();

process.stdin
    .pipe(whaleit)
    .pipe(process.stdout)

```