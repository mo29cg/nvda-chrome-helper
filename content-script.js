const targetTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

replacer(targetTags);

function replacer(target) {
  const headers = document.querySelectorAll(target);

  headers.forEach((header) => {
    const a = header.querySelector("a");

    if (a) {
      a.ariaHidden = true;
    }
  });
}
