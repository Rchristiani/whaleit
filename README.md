# Whaleit

Have a whale of a time with this transform stream.

### Useage

```
    npm i --save whaleit
```

```
const Whaleit = new require('whaleit')();

const whaleit = new Whaleit();

process.stdin
    .pipe(whaleit)
    .pipe(process.stdout)

```