<<<<<<< HEAD
$('.locations')
.append(
  '<p> location ' + window.location + '</p>'
)
.append(
  '<p> location_hash ' + window.location.hash + '</p>'
)
.append(
  '<p> location_host ' + window.location.host + '</p>'
)
.append(
  '<p> location_hostname ' + window.location.hostname + '</p>'
)
.append(
  '<p> location_href ' + window.location.href + '</p>'
)
.append(
  '<p> location_origin ' + window.location.origin + '</p>'
)
.append(
  '<p> location_pathname ' + window.location.pathname + '</p>'
)
.append(
  '<p> location_port ' + window.location.port + '</p>'
)
.append(
  '<p> location_protocol ' + window.location.protocol + '</p>'
)
.append(
  '<p> location_search ' + window.location.search + '</p>'
);

let count = Number(localStorage.getItem('comment_count'));
let comment = '';
//обнулить
//localStorage.setItem('comment_count', 0);
//localStorage.removeItem('comment_value');
//localStorage.removeItem('comment_count');
//localStorage.clear();

if (count === null) {
  localStorage.setItem('comment_count', 0);
  count = 0;
}

$('#clear').click(function() {
  localStorage.clear();
  location.reload();
  });

console.log(count);


for (let i = 1; i <= count; i++) {
  let comment = localStorage.getItem('comment_value(' + i + ')');
  $('#comments_box').find('ul').append('<li>' + comment + '</li>');
}

$('.comment').submit(function() {
  event.preventDefault();
  let textarea = $(this).find('textarea')
  let comment = textarea.val();
  let count = Number(localStorage.getItem('comment_count'));
  textarea.val('');

  $('#comments_box').find('ul').append('<li>' + comment + '</li>');

  localStorage.setItem('comment_count', ++count);
  localStorage.setItem('comment_value(' + count + ')', comment);

  //console.log(localStorage.getItem('comment_count'));

});

=======
$('#new_task').keypress(function(event){
	if(event.which == '13'){
      let comment = $('#new_task').val();
      $('#todo').append('<div class="todo_field input-group mb-3"><div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><input id="task" type="text" value="' + comment +'" class="form-control" aria-label="Text input with checkbox"><button type="button" class="remove_button btn btn-light">x</button></div>');
      //$('.todo_field:last-child').clone().appendTo('#todo');
      //$('#task').val($('#new_task').val());
      $('#new_task').val('');
	}
});

$('.remove_button').click(function() {
  alert("!");
  //$('input:text').val('');
  //$('.todo_field').addClass('to_remove');
  //$('.todo_field').remove();
})
>>>>>>> origin/master
