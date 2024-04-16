async function fetchDataFromMultipleServers(urls) {
  try {
    console.log("Fetching...");
    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Cannot loading data from ${url} (status ${response.status})`
        );
      }
      return response.json();
    });

    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    console.error("Error occured:", error);
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

async function fetchDataFromMultipleServersExample() {
  try {
    const results = await fetchDataFromMultipleServers(urls);
    console.log("Fetched data:", results);
  } catch (error) {
    console.error("Error occured:", error);
  }
}

fetchDataFromMultipleServersExample();
