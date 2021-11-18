import { zoomsetting } from './setting.js';
import { filtersetting } from './setting.js';
import { getSaturationSetting } from './setting.js';
export const GetSmallerValueZoom=(zoomvalue)=>{
  zoomvalue.value=`${parseInt(zoomvalue.value,10)-25}%`;
  if (zoomvalue.value < `${0}%`) {zoomvalue.value = `${0 }%`;}

};

export const GetBiggerValueZoom=(zoomvalue)=>{
  zoomvalue.value=`${parseInt(zoomvalue.value,10)+25}%`;
  if(parseInt(zoomvalue.value,10)>100){zoomvalue.value=`${100}%`;}


};
export const GetSmallerZoom=(picture,zoom)=>{
  const value=zoomsetting[zoom];
  picture.style.transform=value;
};

export const arrFiltChecked=(elements)=>{
  const arrFilterChecked=[];
  [...elements].forEach((element)=>{
    if(element.checked===true){
      arrFilterChecked.push(element);
    }
  });
  return arrFilterChecked;
};


export const GetCurrentFilter=(elem,img)=>{
  const filterClass=filtersetting[arrFiltChecked(elem)[0].value];
  img.className='';
  img.classList.add(filterClass);

};


export const GetSuturate=(elemen,set)=>{
  const CurrentFilter=getSaturationSetting[arrFiltChecked(elemen)[0].value];
  const changeFilter=String(`${CurrentFilter}(${set})`);

  return changeFilter;
};
