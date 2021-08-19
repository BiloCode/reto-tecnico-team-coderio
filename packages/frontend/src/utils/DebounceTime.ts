function DebounceTime(func, wait) {
  let timeout;

  return function(...args) {
    const later = () => {
      timeout = null;

      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}

export default DebounceTime;