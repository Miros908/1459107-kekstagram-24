import { hashtags } from './main.js';

const regex= new RegExp('[^a-zA-Z0-9#]+', 'g');


export const deleteListenerEsc= (check,textarea)=>{
  if(hashtags===document.activeElement || textarea===document.activeElement){
    window.removeEventListener('keydown',check);
  }else{ window.addEventListener('keydown',check); }
};


export const getCheckValidity=()=>{
  const hashtag=hashtags.value.toLowerCase().split(' ');

  hashtag.forEach((hash)=>{
    if(hash[0]!=='#'){hashtags.setCustomValidity('Хештег должен начинаться с решетки');}else{hashtags.setCustomValidity('');}


    if(hash==='#'){hashtags.setCustomValidity('Хештег не может состоять из одной решетки');}


    if(regex.test(hash)){hashtags.setCustomValidity('Хештег не может содержать спецсимволы');}

    if(hash.length>20){hashtags.setCustomValidity('Хештег должен быть не более 20 символов');}


    const array=[...new Set(hashtag)];

    if(array.length!==hashtag.length){
      hashtags.setCustomValidity('Нельзя повторять хештеги');
    }

    if(hashtag.length>5){
      hashtags.setCustomValidity('Не более 5-ти хештегов');
    }

    if(hashtags.value===''){
      hashtags.setCustomValidity('');
    }


  });


};


