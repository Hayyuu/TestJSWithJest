function caesarCipher(str,shiftFactor){
    let strArray=str.split('');
    let newStr='';
    let charCode,newCharCode;
    for(let i=0;i<strArray.length;i++){
        charCode=str.charCodeAt(i);
        newCharCode=charCode+shiftFactor;
        if((charCode>0 && charCode<=64) ||
            (charCode>90 && charCode<=96) || 
            (charCode>122 && charCode<=127) ){
            newCharCode=charCode;
        }
        if(newCharCode > 122){
            newCharCode=setCharCode(newCharCode);
        }
        newStr+=String.fromCharCode(newCharCode);
    }

    function setCharCode(code){
        return code-26;
    }
    return newStr;
}
export {caesarCipher}