import axios from "axios";

export const exerciseOptions = {
  method: "GET",
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    "X-RapidAPI-Key": '433553f24bmsha50b805cd75d11cp148f04jsnd97ce6629408',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const FetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
