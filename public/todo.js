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
            		$(this).remove(); // miShow fixed
            });
            $('ul').append(newLi); 
            $('#task').val('');
            return false; 
        }
    });
    $('ul').sortable(); 
});