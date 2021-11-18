

export const getPhoto=(data,template,container,filter)=>{

  const array=data.slice(0);


  if(filter==='filter-random'){data=data .map((elem) => [elem, Math.random()])
    .sort((ax,bx)=> ax[1] - bx[1])
    .map((elem)=> elem[0]).slice(0,10);}

  if(filter==='filter-discussed'){data=array.sort((ax, bx) => bx.likes - ax.likes);}


  if(container.querySelectorAll('.picture').length!==0){
    [...container.querySelectorAll('.picture')].forEach((elem)=>{elem.remove();});
  }

  data.forEach((element)=>{


    const picture=template.cloneNode(true);

    picture.querySelector('a').href=element.url;
    picture.querySelector('img').src=element.url;
    picture.querySelector('.picture__comments').textContent=element.comments.length;
    picture.querySelector('.picture__likes').textContent=element.likes;
    container.appendChild(picture);


  });


};


export const getElement=(data,evt)=>{
  const arr=[];

  data.forEach((element)=>{

    if(Number(element.id)===Number(evt.target.id))
    {arr.push(element);}


  });


  return arr;
};


export const getBigPhoto=(bigphoto,data,numbercomments)=>{

  bigphoto.querySelector('.big-picture_user').src=data[0].url;
  bigphoto.querySelector('.big-picture__social').querySelector('.social__picture').src=data[0].url;
  bigphoto.querySelector('.big-picture__social').querySelector('.social__caption').textContent=data[0].description;
  bigphoto.querySelector('.big-picture__social').querySelector('.likes-count').textContent=data[0].likes;
  bigphoto.querySelector('.comments-count').textContent=data[0].comments.length;
  if(data[0].comments.length<5){bigphoto.querySelector('.comments-count-from').textContent=data[0].comments.length; }else{bigphoto.querySelector('.comments-count-from').textContent=5;}
  bigphoto.querySelector('.social__comments').innerHTML='';


  const comments=data[0].comments;


  comments.slice(0,numbercomments).forEach((element)=>{
    const newcomment=document.createElement('li');
    newcomment.classList.add('social__comment');
    const commentimg=document.createElement('img');
    commentimg.classList.add('social__picture');

    commentimg.src=element.avatar;
    newcomment.append(commentimg);

    const commentuser=document.createElement('p');
    commentuser.classList.add('social__text');
    commentuser.textContent=element.message;

    newcomment.append(commentuser);

    bigphoto.querySelector('.social__comments').append(newcomment);


  });

};


