function miSave() {
	if (typeof(miObj) !== "undefined") {miObj.remove();} // need to save for every <li>.click
	var miarr = [];
    $("li").each(function(){
        miarr.push($(this).text());
    });	
	$.ajax({
		type:'POST', url:'http://192.168.0.2:3000/data',
	    data:JSON.stringify({ elArr: miarr }), contentType:"application/json"
	});
}

function miLoad() {
	$.get("http://192.168.0.2:3000/data", function(data, status){
		for (var key in data) {
			var newLi = $('<li>' + data[key].descr + '</li>');
			newLi.on('click', function() {
				miObj = $(this);
				$(this).fadeOut(1000);
			});
			$('ol').append(newLi); 		
		}
	});
	console.log('L');
}

$(document).ready(function() {
	$(document).on('keypress',function(e) {
		if(e.which == 13) {
			//alert('You pressed enter!');
			console.log($('#task').text());
			//return false;
			event.preventDefault();
		}
	});
    $('ol').sortable();
	console.log('.>');
	miLoad();
});