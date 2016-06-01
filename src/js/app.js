$(document).ready(function() {
  // Button that submits info
  $('#subBtn').click(function(e) {
    // prevents page from loading after action is taken
    e.preventDefault();
    // variable to store submitted info
    var inSpot = $('#inputSpot').val();
    // button to cancel submitted info
    var xBtn = ' <a href="">Remove</a>';
    // function to create to do item with button
    $('#outputDiv').append('<li>' + inSpot + xBtn + '</li>');
    // delete value inside input box and focus the curser back in the box
    $('#inputSpot').val('').focus();
  });
  // button that deletes just that item on list
  $(document).on('click', 'a', function(e) {
    e.preventDefault();
    // parent() gets parent tag of child tag
    // Grabs the <li> which is the parent tag of <a> and removes <li>
    $(this).parent().remove();
  });
});
