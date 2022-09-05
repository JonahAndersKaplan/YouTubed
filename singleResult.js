// api key: AIzaSyCr1H2DbErb8giLeDnQBBLeEfDh5hA9-nc

const searchTerm = "sfjad;fojas;dojfa/sdojf/aosdd/sad/jfo;asd";
const apiKey = "AIzaSyCr1H2DbErb8giLeDnQBBLeEfDh5hA9-nc";
const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}&key=${apiKey}`;
const iFrame = document.querySelector(".youtubevideo");
const section = document.querySelector(".write-section");
console.log(iFrame);

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log("there was an error");
  }
};

// fetchData(URL);

const displayData = (data) => {
  console.log(data);
  if (data.items.length < 1) {
    section.innerHTML = `<h1> no results matched your search </h1>`;
  } else {
    const videoId = data.items[0].id.videoId;
    //   console.log(videoId);
    const videoURL = `https://www.youtube.com/embed/${videoId}`;
    iFrame.src = videoURL;
  }
};

const presentData = async (url) => {
  const data = await fetchData(url);
  displayData(data);
};

presentData(URL);
