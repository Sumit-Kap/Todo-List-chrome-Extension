window.onload = function what(){
for(var i=1; i<=localStorage.value; i++)
{
	var task = 'task'+i;
	document.getElementById('result').innerHTML=localStorage.getItem(task);

}
}