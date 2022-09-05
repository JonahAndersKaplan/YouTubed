import displayData from "./displayData.js";
const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=`;
const apiKey = "AIzaSyD-EI2HpKERrVIDZM2_EGOL8rZ8c3l8oj4";

const fetchData = async (searchResult) => {
  try {
    const response = await fetch(`${URL}${searchResult}&key=${apiKey}`);
    const data = await response.json();
    const results = data.items;
    console.log(results);
    // displayData(results);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
