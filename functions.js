function ola(param) {
    return `Olá ${param}`
}
console.log(ola('mundo'));

(function (param) {
    return `Olá ${param}`
}) ('ola auto')

var ola = function ola(param) {
    return `Olá ${param}`
}

console.log(ola('ola mundo 2'))