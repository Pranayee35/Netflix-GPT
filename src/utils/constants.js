export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const user_avtar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZIOw_o4aMw44aSD0VjbWV8OvpiqPcsnLCg&s"
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  }
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const background = "https://assets.nflxext.com/ffe/siteui/vlv3/1d8a9cc6-dbed-4bcc-9e40-d71d8cc8340b/web/IN-en-20251006-TRIFECTA-perspective_a6194aef-34d2-4b3a-b93f-d9cb871bdcd0_large.jpg"
export const supported_lang = [
  {identifier:"en",name:"English"},
  {identifier:"hindi",name:"Hindi"},
  {identifier:"spanish",name:"Spanish"},

];
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
export const FIREBASE_KEY = process.env.REACT_APP_FIREBASE_API_KEY;