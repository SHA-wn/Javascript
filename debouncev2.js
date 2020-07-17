const debounce = (fn, timePeriod) => {
  let timeOut;
  return function (...params) {
    if (timeOut) {
      //    console.log("Timer reset")
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      fn(...params);
    }, timePeriod);
  };
};

const Search = (x) => {
  console.log(x);
};

const debouncedSearch = debounce(Search, 1000);

debouncedSearch("Hi");
debouncedSearch("Hello");
debouncedSearch("Bye");
