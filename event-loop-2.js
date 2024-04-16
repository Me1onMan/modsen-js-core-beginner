function fetchDataWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Time is up!"));
    }, timeout);

    fetch(url)
      .then((response) => {
        clearTimeout(timer);
        resolve(response.json());
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
const timeout = 500;

fetchDataWithTimeout(apiUrl, timeout)
  .then((data) => {
    console.log("Data was fetched:", data);
  })
  .catch((error) => {
    console.error("Error while fetching:", error);
  });
