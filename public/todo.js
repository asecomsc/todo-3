function miSave() {
	var miarr = [];
    $("li").each(function(){
        miarr.push($(this).text());
    });	
	console.log({ elArr: miarr });
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
				$(this).remove(); 
			});
			$('ul').append(newLi); 		
		}
	});
}

function miShow() {
    $("li").each(function(){
        alert($(this).text())
    });
}

$(document).ready(function() {
    $('form').submit(function() {
        if ($('#task').val() !== '') {
            var newTask = $('#task').val();
            var newLi = $('<li>' + newTask + '</li>');
            newLi.on('click', function() {
            		$(this).remove(); 
            });
            $('ul').append(newLi); 
            $('#task').val('');
            return false; 
        }
    });
    $('ul').sortable(); 
	miLoad();
});