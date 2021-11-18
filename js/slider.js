

export const getSlider=(slidercontainer,stepsize,min,max,meaning)=>{
  noUiSlider.create(slidercontainer, {
    start: [0],

    step: stepsize,
    connect: 'lower',
    range: {
      'min': min,
      'max': max,
    },
    format: wNumb({

      suffix: meaning,
    }),


  });

};
