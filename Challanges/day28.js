// day28 challange - write a program to print hallo world 1000 times without using loop

function printhelloworld(times){
    if(times > 0)
    console.log('Hello World')
     printhelloworld(times - 1)
}

printhelloworld(1000);