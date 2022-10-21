let num=11;
let count=0;
for(i=2;i<num;i++)
{
    if(num%i==0)
    {
        count++;
    }
}
if(count==0){
    console.log(num+" is a Prime no")
}
else{
    console.log(num+" is not a prime no")
}