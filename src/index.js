module.exports = function reverse (n) {
    let a=n+"";
    let rev="";
    for (let i = a.length-1; i >=0; i--) {
        rev=rev+a[i];
    }
    const result=+rev;
   
    return result;
}
console.log(reverse(291))