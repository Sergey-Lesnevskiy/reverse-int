module.exports = function reverse (n) {
if (n<0){
    n=n*(-1);
    let a=n+"";
    let rev="";
    for (let i = a.length-1; i >=0; i--) {
        rev=rev+a[i];
    }
    let result=+rev;
    // let result1 = result*(-1);
    return result; 
}else{
   let a=n+"";
    let rev="";
    for (let i = a.length-1; i >=0; i--) {
        rev=rev+a[i];
    }
    let result=+rev;
return result;
}

}
