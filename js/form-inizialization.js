
const getnormalzoom=(picture)=>{
  picture.style.transform='scale(1)';
};


const getnormaleffect=(picture)=>{
  picture.style.filter='grayscale(0)';
};

const destroyslider=(slidercontainer)=>{
  slidercontainer.noUiSlider.destroy();

};

const getNormalEffect=(effect)=>{
  effect.checked=true;
};

export const getFormStart=(picture,slidercontainer,form,effect,xor)=>{
  form.reset();
  getnormalzoom(picture);
  getnormaleffect(picture);
  if(xor!==null){destroyslider(slidercontainer);}
  getNormalEffect(effect);


};
