

export const getSlider=(slidercontainer,stepsize,min,max)=>{
  noUiSlider.create(slidercontainer, {
    start: [0],

    step: stepsize,
    connect: 'lower',
    range: {
      'min': min,
      'max': max,
    },


  });

};
