const resultsDOM = document.querySelector(".results");

const displayData = (list) => {
  const vid = list
    .map((item) => {
      const { title } = item.snippet;
      const { description } = item.snippet;
      const { videoId } = item.id;
      //   console.log(title);
      return `<a
            href="https://www.youtube.com/embed/${videoId}"
            target="_blank"
          >
            <h4>${title}</h4>
            <p>${description}</p>
            <iframe
              width="100%"
              height="300px"
              class="youtubevideo"
              src="https://www.youtube.com/embed/${videoId}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </a>
    `;
    })
    .join("");
  resultsDOM.innerHTML = `<div class="articles">
          ${vid}
        </div>`;
};

export default displayData;
