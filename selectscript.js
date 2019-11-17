$(
  ".shapes,.wheat, .pieType, .sweet1, .sweet2, .sweet3,.savoury1, .savoury2, .savoury3, .pie-customizer-dessert, .pie-customizer-food, .formular"
).hide();

//### current page
let currentPage;

//### type of pie
let pieType = 0;

//#### selecter

//#### go to first page
$("button").click(function() {
  $(".preorderpage").hide();
  $(".navBar").hide();
  $(".foot").hide();
  $(".shapes").show();
});
//### select radio button
// $(".box").click(function(){
//     selected = $(this).attr('id')
//     $("#circle").prop("checked", true);
// });

//##### change background-color

$(".r-box").click(function() {
  let selected = $(this).attr("id");
  let selectedId = $("#checkbox-" + selected);
  selectedId.prop("checked", true);
  pieType = $(this).attr("type");
  $(this)
    .parent()
    .find(".r-box")
    .css("background-color", "");
  $(this).css("background-color", "#afa0c5");
});

$(".box").click(function() {
  if ($(this).hasClass("cb-active")) {
    $(this).removeClass("cb-active");
  } else {
    let selected = $(this).attr("id");
    let selectedId = $("#checkbox-" + selected);
    selectedId.prop("checked", true);
    pieType = $(this).attr("type");
    $(this).addClass("cb-active");
  }
});

//### Pie Type Chosen

function hidePieType(type) {
  if (type == "sweet") {
    console.log("sweet selected");
    $(".sweet1").show();
    $(".pieType").hide();
  }
  if (type == "savoury") {
    $(".pieType").hide();
    $(".savoury1").show();
  }
}

//###### show next step

$("a").click(function() {
  let input = $(this).attr("value");
  //backward
  currentPage = $(this).attr("type");
  switch (currentPage) {
    case "0":
      $(".shapes").hide();
      $(".navBar").show();
      $(".preorderpage").show();
      break;
    case "1":
      $(".wheat").hide();
      $(".shapes").show();
      break;
    case "2":
      $(".wheat").show();
      $(".pieType").hide();
      break;
    case "3":
      $(".sweet1").hide();
      $(".pieType").show();
      break;
    case "4":
      $(".sweet2").hide();
      $(".sweet1").show();
      break;
    case "5":
      $(".sweet3").hide();
      $(".sweet2").show();
      break;
    case "6":
      $(".savoury1").hide();
      $(".pieType").show();
      break;
    case "7":
      $(".savoury2").hide();
      $(".savoury1").show();
      break;
    case "8":
      $(".savoury3").hide();
      $(".savoury2").show();
      break;
  }
  //forward
  switch (input) {
    case "shape":
      $(".shapes").hide();
      $(".wheat").show();
      break;
    case "wheat":
      $(".wheat").hide();
      $(".pieType").show();
      break;
    case "pieType":
      hidePieType(pieType);
      break;
    case "filling1":
      $(".sweet1").hide();
      $(".sweet2").show();
      break;
    case "filling2":
      $(".sweet2").hide();
      $(".sweet3").show();
      break;
    case "filling3":
      $(".sweet3").hide();
      $(".formular").show();
      $(".navBar").show();
      $(".foot").show();
      $(".foodPie").hide();
      $(".pieTypes").hide();
      $(".navBar").show();
      $(".foot").show();

      break;
    case "savoury1":
      $(".savoury1").hide();
      $(".savoury2").show();
      break;
    case "savoury2":
      $(".savoury2").hide();
      $(".savoury3").show();
      break;
    case "savoury3":
      $(".savoury3").hide();
      $(".formular").show();
      $(".navBar").show();
      $(".foot").show();
      $(".dessertPie").hide();
      $(".pieTypes").hide();

      break;
  }
});

// let input = $(this).attr('value')
// let selected = $("."+ input)

// let pieType = $(this).attr('type')
// $('.outeroutercontainer').click( function() {
//     console.log('click')
//     let idValue = $(this).attr('id');

// });

// $('#c,#s,#st,#h,.fa-hamburger,.fa-birthday-cake,#food,#cake').hide();
// $('.fas').click( function() {
//     var inputValue = $(this).attr("value");
//     var targetBox = $("." + inputValue);

//     $(".selectt").not(targetBox).hide();
//     console.log(firstChoice);
//     $('.fa-hamburger, .fa-birthday-cake').show();
//     $('#food, #cake').hide();
//     $(targetBox).show();
//     $(firstChoice).show();
// });

// $('#fo,#ca').click(function (){
//     input = $(this).attr("value");
//     target = $("." + input);
//     $(target).show();
//     console.log(firstChoice)
//     $(firstChoice).show();
// })

// $('#circle').click(()=>{
//     console.log('circle');
// } );
