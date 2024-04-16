const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Error while fetching data", error);
    throw new Error(error);
  }
};

const fetchDataAndLog = async () => {
  const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
  console.log(data);
};

fetchDataAndLog();
