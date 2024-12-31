(function ($, Drupal) {
  Drupal.behaviors.phe = {
    attach: function (context, settings) {
      $(window).on("load", function () {
        $checkboxes = $('input[type="checkbox"]');
        $(once('is-checked', 'input[type=checkbox]', context)).each(function () {
          if ($("this[name*='field_include_mobile_view']") && $("this:checked").length > 0){
           // alert('gotem');
          }else{
           // alert('checked');
          }
          if ($("this[name*='field_include_media_item']") && $("this:checked").length > 0) {
            //alert('gotem');
          } else {
            //alert('checked');
          }
        });
      });
    }
}
})(jQuery, Drupal);
