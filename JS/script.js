const d = document;

function rating() {
  const $ratingForm = d.querySelector(".rating-form"),
  $ratingItems = d.querySelectorAll(".rating__item"),
    $btnSubmit = d.querySelector(".rating-form__submit"),
    $ratingCard = d.querySelector(".rating-card"),
    $confirmCard = d.querySelector(".confirm"),
    $confirmInfo = d.querySelector(".confirm__info");
  d.addEventListener("click", (e) => {
    const $item = e.target;
    $ratingItems.forEach((item) => {
      let ratingValue;
      if ($item === item) {
        ratingValue = item.value;
        item.classList.add("selected");
        $btnSubmit.removeAttribute("disabled");
        $confirmInfo.textContent = `You selected ${ratingValue} out of ${$ratingItems.length}`;
      }
      if ($item !== item && $item.classList.contains("rating__item")) {
        item.classList.remove("selected");
      }
      if (e.target === $btnSubmit) {
        e.preventDefault();
        $ratingCard.classList.toggle("hidden");
        $confirmCard.classList.toggle("hidden");
        setTimeout(() => {
          $ratingCard.classList.remove("hidden");
          $confirmCard.classList.add("hidden");
          item.classList.remove("selected");
          $btnSubmit.setAttribute("disabled", null);
        }, 5000);
      }
    });
  });
}

rating();
