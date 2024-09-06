
// ============Togggle side navbar
$(document).ready(function(){
    $(".toggle").click(function(){
        $(".sideWidth").addClass("w-0 d-none");
        $(".mainContainer").addClass("w-100");
        $(".navbar-brand").show();
    })
    $(".navbar-brand").click(function(){
        $(".sideWidth").removeClass("w-0 d-none");
        $(".mainContainer").removeClass("w-100");
        $(this).hide();
    })
})
// ====================

$(document).ready(function () {
    $(".opentoggle").click(function () {
        $(".innerTab").slideToggle();
        $(".toggleIcon").toggleClass("rotate180");
    });
    $(".openProduct").click(function () {
        $(".productSlide").slideToggle();
        $(".productIcon").toggleClass("prod");
    });
});

// ========================counter libarary
$(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 8000,
          easing: "swing",
          step: function (now) {
            now = Number(Math.ceil(now)).toLocaleString('en');
                                  $(this).text(now);
          },
        }
      );
});
  

// ===========file input chnages=====================
$(document).ready(function() {
  $('.file-input').on('change', function() {
      var input = this;
      var $container = $(this).closest('.image-box');
      var $preview = $container.find('.img-preview');
      var $toast = $container.find('.toast');

      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $preview.attr('src', e.target.result);
          };
          reader.readAsDataURL(input.files[0]);
      }
  });
});


     
// =============change and remove icon image=========
// Function to handle changing the icon using file input
function changeIcon(event) {
  var file = event.target.files[0];
  if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
          var image = document.getElementById('iconImage');
          image.src = e.target.result;
      };
      reader.readAsDataURL(file);
  }
}

// Function to handle removing the icon
function removeIcon() {
  var image = document.getElementById('iconImage');
  image.src = ''; // Remove the image by setting its source to an empty string
}

// Add event listener to file input for changing the icon
document.getElementById('fileInput').addEventListener('change', changeIcon);








