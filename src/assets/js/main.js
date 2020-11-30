if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  require("smooth-scroll")('a[href*="#"]');
}

setTimeout(function () {
  if (window.innerWidth > 768) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.intersectionRatio > 0) {
          document
            .querySelector(`li a[href="#${id}"]`)
            .classList.add("is-active");
        } else {
          document
            .querySelector(`li a[href="#${id}"]`)
            .classList.remove("is-active");
        }
      });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll("section[id]").forEach(section => {
      observer.observe(section);
    });
  }
}, 300);
