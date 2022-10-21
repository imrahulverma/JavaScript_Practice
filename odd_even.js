function oddeven(){
    let input=Number(document.getElementById('num1').value);
    if((input%2)==0)
    {   
        document.write(input)
        document.write(" is a even no");
        
    }
    else{
        document.write(input)
        document.write(" is a odd no");
    }
}