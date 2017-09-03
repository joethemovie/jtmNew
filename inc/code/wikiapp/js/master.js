$(document).ready(function(){
  jQuery.fn.hideObtrusiveText = function ()
{
    return this.each(function ()
    {
        var v = this.value;

        $(this).blur(function ()
        {
            if (this.value.length == 0) this.value = v;
        }).focus(function ()
        {
            this.value = "";
        });
    });
};
  // search hide show
  $('.subBut').hide();
  $('.commentarea').click(function(){
    $('.subBut').show(300, "linear");
  });
  $(document).mouseup(function (e)
{
    var container = $(".commentArea");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $('.subBut').hide(300, "linear");
    }
});
  // enter/return search submission functionality
  $('.commentarea').keydown(function(event) {
        if (event.keyCode == 13) {
          $("input:text").hideObtrusiveText();
          var searchTerm = $('#searchTerm').val();

          var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
          console.log(url);

          $.ajax({
            type: "GET",
            url:url,
            async:false,
            dataType:"json",
            success: function(data){
              // console.log(data[1][0]);
              // console.log(data[2][0]);
              // console.log(data[3][0]);
              $('#output').html('');
              for (var i = 0; i < data[1].length; i++) {
                $('#output').prepend("<li><strong><a href= " + data[3][i] + " target='_blank'>" + data[1][i] + "</a></strong><p>" + data[2][i] + "</p></li>");
              }

            },
            error: function(errorMessage){
              alert("Error");
            }
          });
            return false;
         }
    });
  // search button click functionality
  $('#search').click(function(){
    $("input:text").hideObtrusiveText();
    var searchTerm = $('#searchTerm').val();
  // api url concat
    var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchTerm + '&format=json&callback=?';
    console.log(url);

    $.ajax({
      type: "GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        // console.log(data[1][0]);
      },
      error: function(errorMessage){
        alert("Error");
      }
    });
  });
});
