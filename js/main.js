import { arrFiltChecked, GetSmallerValueZoom, GetSmallerZoom } from './redact-photo.js';
import { GetBiggerValueZoom } from './redact-photo.js';
import { GetCurrentFilter } from './redact-photo.js';
import { GetSuturate } from './redact-photo.js';
import { getSlider } from './slider.js';
import { sliderSetting } from './setting.js';
import { getCheckValidity } from './check-validity.js';
import{deleteListenerEsc} from './check-validity.js';
import { sendForm } from './get-data.js';
import { getFormStart } from './form-inizialization.js';
import { getData } from './get-data.js';
import { getPhoto } from './get-users-photo.js';
import { getElement } from './get-users-photo.js';
import { getBigPhoto } from './get-users-photo.js';
import{ GetUsersFilter} from './users-filter.js';

export const hashtags=document.querySelector('.text__hashtags');
const form=document.querySelector('#upload-select-image');
const overlay=form.querySelector('.img-upload__overlay');
const uploadcancel=form.querySelector('#upload-cancel');
const buttonsmallerzoom=form.querySelector('.scale__control--smaller');
const buttonbiggerzoom=form.querySelector('.scale__control--bigger');
const zoomvalue=form.querySelector('.scale__control--value');
const picture=form.querySelector('.img-upload__picture');
const filter=form.querySelectorAll('.effects__radio');
const slidercontainer=form.querySelector('.effect-level__slider');
let xort=null;
const commentform=document.querySelector('.text__description');
const effectnone=document.querySelector('#effect-none');
const templatesucces=document.querySelector('#success').content;
const success=templatesucces.querySelector('.success');
const closesucces=success.querySelector('.success__button');
const templatepicture=document.querySelector('#picture').content;
const picturescontainer=document.querySelector('.pictures');
const errortemplate=document.querySelector('#error').content;
const error=errortemplate.querySelector('.error');

const closerror=error.querySelector('.error__button');
const bigpicture=document.querySelector('.big-picture');
const body=document.querySelector('body');
const templateerrordownload=document.querySelector('#errors').content;
const bigpicturecancel=bigpicture.querySelector('.big-picture__cancel');
const socialloader=document.querySelector('.social__comments-loader');
const usersfilter=document.querySelector('.img-filters');
const filt=usersfilter.querySelectorAll('.img-filters__button');

let xs=0;
let numbercomments=5;
let filtid;


getData().then((response) => response.json()).then((data)=>{getPhoto(data,templatepicture,picturescontainer);filt.forEach((fil)=>{
  fil.addEventListener('click',()=>{filtid=fil.id; getPhoto(data,templatepicture,picturescontainer,String(filtid));
  });


});


[...document.querySelectorAll('.picture')].forEach((elem)=>{elem.querySelector('img').id=xs;xs++;
  elem.addEventListener('click', (evt)=> {evt.preventDefault();

    if(evt.target.tagName==='IMG'){bigpicture.classList.remove('hidden');getBigPhoto(bigpicture,getElement(data,evt),numbercomments);


    }


    const handler3=()=>{
      numbercomments+=5;

      bigpicture.querySelector('.social__comments').innerHTML='';

      getBigPhoto(bigpicture,getElement(data,evt),numbercomments);
      bigpicture.querySelector('.comments-count-from').textContent=document.querySelector('.social__comments').children.length;
      if(getElement(data,evt)[0].comments.length===document.querySelector('.social__comments').children.length){
        socialloader.classList.add('hidden');
      }

    };

    const handler4=()=>{bigpicture.classList.add('hidden');
      numbercomments=5;
      bigpicturecancel.removeEventListener('click',handler4);
      socialloader.removeEventListener('click',handler3);
      socialloader.classList.remove('hidden');
    };
    const handler5=(evten)=>{if(evten.keyCode===27){
      numbercomments=5;
      bigpicture.classList.add('hidden');
      socialloader.removeEventListener('click',handler3);
      window.removeEventListener('keydown',handler5);
      socialloader.classList.remove('hidden');
    }};


    socialloader.addEventListener('click',handler3);

    bigpicturecancel.addEventListener('click',handler4);


    window.addEventListener('keydown',handler5);


  });});


}).catch(()=>{body.append(templateerrordownload);}).then(GetUsersFilter(usersfilter,filt));
let handler2=null;
let check=null;
const handler= ()=>{
  overlay.classList.remove('hidden');
  form.removeEventListener('change', handler);
  uploadcancel.addEventListener('click',handler2);
  window.addEventListener('keydown',check);


};
form.addEventListener('change',handler);

handler2=()=>{
  overlay.classList.add('hidden');
  uploadcancel.removeEventListener('click',handler2);
  form.addEventListener('change',handler);

};


check =(evt)=>{
  if(evt.keyCode===27){

    overlay.classList.add('hidden');
    window.removeEventListener('keydown',check);
    form.addEventListener('change',handler);

  }
};
buttonsmallerzoom.addEventListener('click',()=>{
  GetSmallerValueZoom(zoomvalue);
  GetSmallerZoom(picture,parseInt(zoomvalue.value,10));
});

buttonbiggerzoom.addEventListener('click',()=>{
  GetBiggerValueZoom(zoomvalue);
  GetSmallerZoom(picture,parseInt(zoomvalue.value,10));
});


[...filter].forEach((elemen)=>{
  elemen.addEventListener('click',()=>{
    GetCurrentFilter(filter,picture);
    const filtervalue=arrFiltChecked(filter)[0].value;


    if(xort!==null){slidercontainer.noUiSlider.destroy();}

    if(filtervalue!=='none'){xort=getSlider(slidercontainer,sliderSetting[filtervalue][0],sliderSetting[filtervalue][1],sliderSetting[filtervalue][2],sliderSetting[filtervalue][3]),  slidercontainer.noUiSlider.on('update', () => {
      picture.style.filter=GetSuturate(filter,slidercontainer.noUiSlider.get());


    });}else{xort=null,picture.style.filter='';}


  });
});

hashtags.addEventListener('input',()=>{getCheckValidity();});


getCheckValidity();


window.addEventListener('click',()=>{
  deleteListenerEsc(check,commentform);


});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendForm(formData).then(()=>{  getFormStart(picture,slidercontainer,form,effectnone,xort);}).then(()=>{ zoomvalue.value=`${100}%`;}).then(()=>{  xort=null;}).then(()=>{ overlay.classList.add('hidden');}).then(()=>{form.addEventListener('change',handler);}).then(()=>{body.append(success);}).then(()=>{closesucces.addEventListener('click',()=>{
    success.remove();
  });}).then(()=>{window.addEventListener('keydown',(evts)=>{
    if(evts.keyCode===27){

      success.remove();

    }

  });}).catch(()=>{body.append(error);overlay.classList.add('hidden');closerror.addEventListener('click',()=>{error.remove();});window.addEventListener('keydown',(evtn)=>{
    if(evtn.keyCode===27){
      error.remove();
    }
  });
  });

},
);


