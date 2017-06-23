function miSave() {
	data = { miarr:["2","4","5"] };
	$.ajax({type:'POST', url:'http://localhost:3000/data',
			data:JSON.stringify(data), contentType:"application/json"
		   });
}

function miLoad() {
	$.get("http://localhost:3000/data", function(data, status){
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
});