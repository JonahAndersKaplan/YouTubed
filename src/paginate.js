const paginate = (videoArray) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(videoArray.length / itemsPerPage);
  const newVideos = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return videoArray.slice(start, start + itemsPerPage);
  });
  return newVideos;
};

export default paginate;
