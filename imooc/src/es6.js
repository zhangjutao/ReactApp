let name = 'haha';
console.log(`${name} \${name}`);

let obj = {
    name,
    [name] : "heihie"
}
console.log(obj);