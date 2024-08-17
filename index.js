window.onload = function () {
  const letter = document.querySelector("#letter");
  const envelope = document.querySelector("#envelope")

  envelope.addEventListener("click", function () {
    open();
  });

  function open() {
    letter.classList.add("open")
    letter.classList.remove("close")
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }
};
