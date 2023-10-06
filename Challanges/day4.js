// day4 challenge - string pelindrome without using inbuilt function 


function strPelindrome(){
let str = 'abba';
let splitstr = str.split('');
let reversedstr = splitstr.reverse()
let joinstr = reversedstr.join('')
if(joinstr === 'abba'){
    console.log('str is pelindrome')
}
else{
    console.log('str is not pelindrome')
}
}

strPelindrome();