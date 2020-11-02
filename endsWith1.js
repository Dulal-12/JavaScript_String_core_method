function strMethod(str,char){
    if(str.endsWith(char)){
        return "Yes that's right";
    }
    else
    {
        return 'Thats was wrong';
    }
}
var result = strMethod('Dulal','l');
console.log(result);