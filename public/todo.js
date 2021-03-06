function fnSave() { 
	var miarr = [];
    $("li").each(function(){
        miarr.push($(this).text());
    });	
	$.ajax({ type:'POST', url:'http://192.168.0.2:3000/data',
	         data:JSON.stringify({ elArr: miarr }), contentType:"application/json" });
}

function miLoad() {
	$.get("http://192.168.0.2:3000/data", function(data, status){
		for (var key in data) {
			var newLi = $('<li>' + data[key].descr + '</li>');
			newLi.on('click', function() {
				    $(this).fadeOut(1000, function(){
					   $(this).remove();
					});
			});
			$('ol').append(newLi); 		
		}
	});
}

$(document).ready(function() {
	$(document).on('keypress',function(e) {
		if(e.which == 13) {
	        if ($('#task').val() !== '') {
				var newTask = $('#task').val();
				var newLi = $('<li>' + newTask + '</li>');
				newLi.on('click', function() {
				    $(this).fadeOut(1000, function(){
					   $(this).remove();
					});
				});
				$('ol').append(newLi); 
				$('#task').val('');
			}
		}
	});	
	$("#miSave").click(function(){
		fnSave();
	});	
    $('ol').sortable();
	miLoad();
});