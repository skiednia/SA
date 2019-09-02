function convertTemp(direction)
{
var fObj = document.convert.ftemp, cObj = document.convert.ctemp, kObj = document.convert.ktemp;


if (direction == "ftoc") // if para troca de f para de F para C //
{
    cObj.value = Math.round((fObj.value - 32) * (5/9));
	kObj.value = Math.round((parseInt(cObj.value) + 459.67) * (5/9));
} 
else if (direction == "ktof") // F para K //
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) -  459.67);
	cObj.value = Math.round((fObj.value - 32) * (5/9));
	
 }
else // C para K e F //
 {
	fObj.value = Math.round((parseInt(cObj.value) * (9/5)) + 32);
	kObj.value = Math.round((parseInt(cObj.value) + 273));
 }
}

function clearAll() // referente ao botão para limpar //
{
document.convert.ftemp.value="";
document.convert.ctemp.value="";
document.convert.ktemp.value="";
}
