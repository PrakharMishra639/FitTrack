export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key':'82426772ffmshfab2e4f86304723p1d8d8ejsnea49d5802659',
    },
  };

 export  const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '82426772ffmshfab2e4f86304723p1d8d8ejsnea49d5802659',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };