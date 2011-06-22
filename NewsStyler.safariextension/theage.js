safari.self.addEventListener("hideSidebar", handleMessage, false);

function handleMessage(event){
	alert(event.name);
}
