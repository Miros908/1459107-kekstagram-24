let getFilterActive=null;

export const GetUsersFilter=(usersfilter,filt)=>{
  usersfilter.classList.remove('img-filters--inactive');

  [...filt].forEach((element)=>{
    element.classList.remove('img-filters__button--active');

  });

  getFilterActive(usersfilter,filt);

};

getFilterActive=(usersfilter,filt)=>{
  [...filt].forEach((elem)=>{
    elem.addEventListener('click',()=>{
      GetUsersFilter(usersfilter,filt);
      elem.classList.add('img-filters__button--active');
    });
  });
};


