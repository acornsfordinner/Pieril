$(".dropdown-toggle").dropdown();

//Start of form JS ------
//Checks if invalids form fields are invalid
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Catch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
//End of form JS -----

//order JS
$(document).on("click", "summary > p", () => {
  $("summary ul").slideToggle();

  $("summary > p > span").toggle();
});
