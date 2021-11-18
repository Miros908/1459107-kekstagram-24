export const sendForm=(formData)=>fetch(
  'https://24.javascript.pages.academy/kekstagram'  ,
  {
    method: 'POST',
    body: formData,
  },
);
export const getData=()=>fetch('https://24.javascript.pages.academy/kekstagram/data');
