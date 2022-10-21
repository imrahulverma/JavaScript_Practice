function multiple()
{
    let input=Number(document.getElementById("num1").value);
    for(i=1; i<=10;i++)
    {
        document.write(input+("*")+i+"="+(input*i)+("<br>"));
    }

}