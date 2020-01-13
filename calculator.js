function getValue(value)
{
    var x=value;
    if(x==='=')
    {
        document.getElementById('input').value = eval(document.getElementById('input').value);
    }
    else if(x==='x^2')
    {
        document.getElementById('input').value = Math.pow(document.getElementById('input').value,2)
    }
    else{
        document.getElementById('input').value+=value; 
    }

}
function clearScreen(){
    document.getElementById('input').value="";
}