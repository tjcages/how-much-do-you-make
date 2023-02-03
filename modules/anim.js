export class Animation {
  constructor(element) {
    this.element = element;

    this.createObserver();
    this.start();
  }

  createObserver() {
    this.observerIn = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) this.animIn();
      },
      {
        root: null,
        threshold: 0.8,
        rootMargin: `0px`,
      }
    );
  }

  start() {
    this.observerIn.observe(this.element);
  }

  stop() {
    this.observerIn.unobserve(this.element);
  }

  animIn() {}
  animOut() {}
  setIn() {}
  setOut() {}
}
