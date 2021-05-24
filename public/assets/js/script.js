let $PlusOrMinus = document.querySelector("#plusOrMinus");

let noraml = true;

$PlusOrMinus.addEventListener("click", () => {
  if (noraml) {
    $PlusOrMinus.classList.remove("fa-plus-circle");
    $PlusOrMinus.classList.add("fa-minus-circle");
    noraml = false;

    document.querySelector("#main").setAttribute("style", "margin-left: -75%");
    document
      .querySelector("#all-options")
      .setAttribute("style", "margin-left: 10%");
    document.querySelector("#options").setAttribute("style", "margin-left: 0%");

    return;
  }
  if (!noraml) {
    $PlusOrMinus.classList.add("fa-plus-circle");
    $PlusOrMinus.classList.remove("fa-minus-circle");
    noraml = true;

    document.querySelector("#main").setAttribute("style", "margin-left: 10%");
    document
      .querySelector("#all-options")
      .setAttribute("style", "margin-left: 95%");
    document
      .querySelector("#options")
      .setAttribute("style", "margin-left: 90%");
    return;
  }
});
