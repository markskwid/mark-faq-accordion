$(document).ready(() => {
  let buttons = $(".btn-accordion");
  let panel = $(".accordion");
  let arrow = $(".arrow");

  const arrowDown = "./images/icon-arrow-down.svg";
  for (let i = 0; i < buttons.length; i++) {
    $(buttons)
      .eq(i)
      .click(() => {
        if ($(buttons).eq(i).hasClass("active")) {
          $(buttons).eq(i).removeClass("active");
          $(arrow).eq(i).removeClass("arrow-up");
        } else {
          $(buttons).eq(i).addClass("active");
          $(arrow).eq(i).addClass("arrow-up");
        }

        $(panel).eq(i).toggle(200);
      });
  }
});
