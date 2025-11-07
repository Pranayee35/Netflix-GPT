// import React, { useRef } from 'react'
// import { useSelector } from 'react-redux'
// import lang from '../utils/languageConstants';
// import openai from '../utils/openai';
// import { API_OPTIONS } from '../utils/constants';
// import { addGptMovieResult } from '../utils/gptSlice';
// import { useDispatch } from 'react-redux';
// const GptSearchBar = () => {
//   const dispatch = useDispatch();
//     const langKey = useSelector((store)=>store.config.lang);
//     const searchText = useRef(null);
//     const searchMovieTmdb = async(movie)=>{
//       const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
//       const json = data.json();
//       return json.results;
//     }
//     const handlegptsearchclick =async () => {
//     console.log(searchText.current.value);
//     const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :"+searchText.current.value+".Only give the names of five movies that match the best like the example given ahead.Example result:Gadar,Sholay,Don,Remo,Yeh jawaani hey diwaani"
//     const gptResults = await openai.chat.completions.create({messages:[{role: "user",content:gptQuery}],
//   model: 'gpt-3.5-turbo',
// });
// console.log(gptResults.choices);
// if(!gptResults.choices){
//   //error handling
// }
// console.log(gptResults.choices?.[0]?.message?.content);
// const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
// const promiseArray = gptMovies.map((movie)=>searchMovieTmdb(movie));
// //it returns an array of 5 promises
// // [promise,promise,promise,promise,promise]
// const tmdbResults = await Promise.all(promiseArray);
// console.log(tmdbResults);
// dispatch(addGptMovieResult({movieNames: gptMovies,movieResults: tmdbResults}));
//   }

//   return (
//     <div className='flex justify-center pt-[10%]'>
//         <form className=' bg-black grid grid-cols-12 p-1 w-1/2' onSubmit={(e)=>e.preventDefault()}>
//             <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
//             <button type='button' className='bg-red-700 text-white py-2 px-4 col-span-3 rounded-lg m-4' onClick={handlegptsearchclick}>{lang[langKey].search}</button>
//         </form>
//     </div>
//   )
// }

// export default GptSearchBar
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { genAI } from "../utils/gemini"; 
import { addGptMovieResult, setLoading } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // 🔍 Function to search movie details from TMDB
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handlegptsearchclick = async () => {
    if(!searchText) return;
    dispatch(setLoading(true));
     await new Promise((resolve) => setTimeout(resolve, 0));
    const query = searchText.current.value;
    console.log("User Query:", query);

    const gptQuery = `Act as a movie recommendation system and suggest some movies for the query: ${query}. Only give the names of five movies that match best, like the example given ahead. Example result: Gadar, Sholay, Don, Remo, Yeh Jawaani Hai Deewani.`;

    try {
      // ✅ Use Gemini model
 const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(gptQuery);
      const text = result.response.text();
      console.log("Gemini Response:", text);

      const gptMovies = text.split(",").map((m) => m.trim());
      const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
      const tmdbResults = await Promise.all(promiseArray);
      
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Gemini API Error:", error);
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex justify-center pt-[35%] md:pt-[10%]">
      <form
        className="bg-black grid grid-cols-12 p-1 w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="button"
          className="bg-red-700 text-white py-2 px-4 col-span-3 rounded-lg m-4"
          onClick={handlegptsearchclick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
