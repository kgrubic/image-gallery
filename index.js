"use strict"

var json = {"images" : [{ "imageUrl" : "pictures/1.png"},{ "imageUrl" : "pictures/2.png"},{ "imageUrl" : "pictures/3.png"},{ "imageUrl" : "pictures/4.png"},
{ "imageUrl" : "pictures/5.png"},{ "imageUrl" : "pictures/6.png"},{ "imageUrl" : "pictures/7.png"},{ "imageUrl" : "pictures/8.png"},
{ "imageUrl" : "pictures/9.png"},{ "imageUrl" : "pictures/10.png"},{ "imageUrl" : "pictures/11.png"},{ "imageUrl" : "pictures/12.png"},]};

var list = json.images;

list.forEach(function(elem,index){
	var div_img = document.createElement("div");
	div_img.setAttribute("id",index);
	div_img.setAttribute('class','image_div');
	var elem_img = document.createElement("img");

	elem_img.setAttribute("src", elem.imageUrl);
	elem_img.setAttribute('draggable',true);
  elem_img.setAttribute("id",index+'a');
	document.getElementById("galery").appendChild(div_img);
	document.getElementById(index).appendChild(elem_img);

});

function handleDragStart(e) {
  this.style.opacity = '0.4';  
  
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('src', e.target.id);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.dataTransfer.dropEffect = 'move';  

  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');  
}


function handleDrop(e) {
  e.preventDefault();
  var src = document.getElementById(e.dataTransfer.getData("src"));
    var srcParent = src.parentNode;
    var trg = e.currentTarget;

    e.currentTarget.parentNode.replaceChild(src, trg);
    srcParent.appendChild(trg);

}

function handleDragEnd(e) {
//remove all class leftovers 
  [].forEach.call(imgs, function (img) {
    img.classList.remove('over');
    img.style.opacity = '1';
  });
}


var imgs = document.querySelectorAll('img');

[].forEach.call(imgs, function(img) {
  img.addEventListener('dragstart', handleDragStart, false);
  img.addEventListener('dragenter', handleDragEnter, false);
  img.addEventListener('dragover', handleDragOver, false);
  img.addEventListener('dragleave', handleDragLeave, false);
  img.addEventListener('drop', handleDrop, false);
  img.addEventListener('dragend', handleDragEnd, false);
});
