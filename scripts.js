window.onload = function () {
    var buttons = document.getElementsByClassName("btn-floating");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].style.animationPlayState = "running";
    }
  };

  $(".btn-circle").click(function () {
    window.history.back();
  });