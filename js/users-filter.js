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


const diaandata=[{id: 1, url: 'photo_2021-11-20_22-24-19.jpg', likes: 44, description: 'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy'},
  {id: 2, url: 'photo_2021-11-20_22-24-31.jpg', likes: 39, description: '#fun #party #cool #young'},
  {id: 3, url: 'photo_2021-11-20_22-24-36.jpg', likes: 6, description: 'Норм'},
  {id: 4, url: 'photo_2021-11-20_22-24-40.jpg', likes: 36, description: ''},
  {id: 5, url: 'photo_2021-11-20_22-24-44.jpg', likes: 43, description: 'Вот это тачка! #wow #car #carwow #drive'},
  {id: 6, url: 'photo_2021-11-20_22-24-47.jpg', likes: 4, description: ''},
  {id: 7, url: 'photo_2021-11-20_22-24-50.jpg', likes: 40,  description: 'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto'},
  {id: 8, url: 'photo_2021-11-20_22-24-54.jpg', likes: 4,  description: 'Цените каждое мгновенье. Цените тех, кто рядом с в…яйте все сомненья. Не обижайте всех словами......'},
  {id: 9, url: 'photo_2021-11-20_22-24-58.jpg', likes: 34,  description: ''},
  {id: 10, url: 'photo_2021-11-20_22-25-02.jpg', likes: 11, description: 'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto'},
  {id: 11, url: 'photo_2021-11-20_22-25-10.jpg', likes: 34,  description: 'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill'},
  {id: 12, url: 'photo_2021-11-20_22-25-17.jpg', likes: 19,  description: 'Хорошо, когда в жизни есть #друзья, которые вместе… могут зайти в #барнарубинштейна и бахнуть #пивка'},
  {id: 13, url: 'photo_2021-11-20_22-25-21.jpg', likes: 8,  description: 'Цените каждое мгновенье. Цените тех, кто рядом с в…яйте все сомненья. Не обижайте всех словами......'}];
console.log(diaandata)
