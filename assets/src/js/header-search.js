(() => {
  let radioInputs = document.querySelectorAll(
    "#header-search-form input[type=radio]"
  );

  let form = document.querySelector("#header-search-form");
  let searchInput = document.querySelector("#header-search-input");

  for (let radioInput of radioInputs) {
    let label = document.querySelector('label[for="' + radioInput.id + '"]');

    label.addEventListener("click", function () {
      updateFormAndInput(radioInput);
    });

    radioInput.addEventListener("change", function () {
      if (radioInput.checked) {
        updateFormAndInput(radioInput);
      }
    });

    label.addEventListener("keydown", function (e) {
      if (
        e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32 ||
        e.key === "Enter" ||
        e.keyCode === 13
      ) {
        radioInput.checked = true;
        updateFormAndInput(radioInput);
      }
    });
  }

  function updateFormAndInput(radioInput) {
    form.action = radioInput.dataset.action;
    searchInput.name = radioInput.dataset.inputName;
    searchInput.placeholder = radioInput.dataset.placeholder;
  }
})();
