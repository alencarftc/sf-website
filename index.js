window.onload = function () {
  var envelope = document.querySelector("#envelope");

  envelope.addEventListener("click", function () {
    const isOpen = envelope.classList.contains("open");
    const act = isOpen ? close : open;
    act();
  });

  function open() {
    envelope.classList.add("open");
    envelope.classList.remove("close");
  }

  function close() {
    envelope.classList.add("close");
    envelope.classList.remove("open");
  }
};
