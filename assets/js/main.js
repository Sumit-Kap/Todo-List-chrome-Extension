function updateUI()
{
	var d = new Date();
	var hour = d.getHours();
	var min = d.getMinutes();
	var finalString = hour + ':' + min;
	//alert(finalString);
	if(finalString == "00:00")
		localStorage.clear();
	for(var i=1; i<=localStorage.value; i++)
	{
		var duration = 'dur'+i;
		var task  = 'task'+i;
		if(localStorage.getItem(duration) == finalString)
		{
			chrome.notifications.create(
    			'Todo List',{   
    			type: 'basic', 
    			iconUrl: 'download.png', 
    			title: "Your task should get over by now", 
    			message: localStorage.getItem(task)+"wake up!" 
    		});
    		var notification = new Notification("Todo List", {body: "Yore message", icon: "img.jpg" });
    		notification.onshow = function() { setTimeout(notification.close(), 15000); };
    		chrome.browserAction.setBadgeText({text: localStorage.value});
    		localStorage.removeItem(task);
    		localStorage.removeItem(duration);
		}
	}
}
$(document).on('ready',function()
{
$('#add').click(function(){
	//alert(value);
	if(typeof(localStorage.value) == 'undefined')
	{
		localStorage.setItem("value","1");
	}
	else
	{
		var newVal = localStorage.value;
		newVal = parseInt(newVal) + 1;
		localStorage.value = newVal;
	}
	var i;
	var task = document.getElementById("task").value;
	var dur = document.getElementById("dur").value;
	//document.getElementById("dur").value = "Kapoor";
	var numValue = localStorage.value;
	document.getElementById("task").value='';
	localStorage.setItem("task"+numValue,task);
	localStorage.setItem("dur"+numValue,dur);
	document.getElementById("task").value = "";
	document.getElementById("dur").value = "";
});
updateUI();
});

