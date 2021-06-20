"use strict";

$(document).ready(function () {
  console.log("jQuery loaded");

  $(".project-links");

  $(".tour-card").each((index, card) => {
    $(card)
      .delay(500 * index)
      .animate({
        opacity: "1",
      });
  });
});
