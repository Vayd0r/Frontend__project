$(function () {
  $('.trending__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
  })
  $('.companies__slider').slick({
    arrows: false,
    slidesToShow: 4,
    infinite: true,
  })
  $("#item-1").click(function() {
    $("#item-1").addClass('culture__btn-clicked');
  });
  $("#item-2").click(function() {
    $("#item-2").addClass('culture__btn-clicked');
  });
  $("#item-3").click(function() {
    $("#item-3").addClass('culture__btn-clicked');
  });
  $("#item-4").click(function() {
    $("#item-4").addClass('culture__btn-clicked');
  });
  $("#item-5").click(function() {
    $("#item-5").addClass('culture__btn-clicked');
  });
  $("#item-6").click(function() {
    $("#item-6").addClass('culture__btn-clicked');
  });
  $("#item-7").click(function() {
    $("#item-7").addClass('culture__btn-clicked');
  });
  $("#item-8").click(function() {
    $("#item-8").addClass('culture__btn-clicked');
  });
  $("#item-9").click(function() {
    $("#item-9").addClass('culture__btn-clicked');
  });
  $("#item-10").click(function() {
    $("#item-10").addClass('culture__btn-clicked');
  });
  $("#item-11").click(function() {
    $("#item-11").addClass('culture__btn-clicked');
  });
  $("#item-12").click(function() {
    $("#item-12").addClass('culture__btn-clicked');
  });
  $("#item-13").click(function() {
    $("#item-13").addClass('culture__btn-clicked');
  });
  $("#item-14").click(function() {
    $("#item-14").addClass('culture__btn-clicked');
  });
  $("#item-15").click(function() {
    $("#item-15").addClass('culture__btn-clicked');
  });

  const titles = document.querySelectorAll('.acardion__label');
  const items = document.querySelectorAll('.acardion__item');


  titles.forEach(label => {
    label.addEventListener('click', (e) => {
      const cleackedTitles = e.currentTarget;
      const element = cleackedTitles.parentNode;
      if (element.classList.contains('acardion__item--active')) {
        element.classList.remove('acardion__item--active');
      } else {
        items.forEach(element => {
          if (element.classList.contains('acardion__item--active')) {
            element.classList.remove('acardion__item--active');
          }
        });
        element.classList.add('acardion__item--active');
      }
    });
  })      
})