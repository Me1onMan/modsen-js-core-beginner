function loadURLs(urls) {
  const promises = urls.map((url) => {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Cannot load URL: ${url}`);
        }
        return response.text();
      })
      .catch((error) => {
        throw new Error(`Error while loading URL: ${url}`);
      });
  });

  return Promise.all(promises);
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];

loadURLs(urls)
  .then((responses) => {
    responses.forEach((response, index) => {
      console.log(`URL ${index + 1}:`, response);
    });
  })
  .catch((error) => {
    console.error("Error while loading data:", error);
  });
