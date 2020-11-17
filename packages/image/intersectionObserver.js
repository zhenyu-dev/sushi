function observe(element, callback, options) {
  const { id, observer, elements } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);

  return function unobserve() {
    observer.unobserve(element);
    elements.delete(element);

    if (elements.size === 0) {
      observer.disconnect();
      window.observers.delete(id);
    }
  };
}

window.observers = new Map();

function createObserver(options) {
  let instance = window.observers.get(options.root);
  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const isVisible = entry.isIntersecting;
      const callback = elements.get(entry.target);
      if (callback && isVisible) {
        callback();
      }
    });
  }, options);

  window.observers.set(
    options.root,
    (instance = {
      id: options.root,
      observer,
      elements
    })
  );

  return instance;
}

export { observe };
