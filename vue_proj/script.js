const dataProd = [
  {
    image: "img/projPhoto-1.png",
    text: "Modern Kitchan",
    info: "Decor / Artchitecture",
    btn: "img/Vector.png",
  },
  {
    image: "img/projPhoto-2.png",
    text: "Modern Kitchan",
    info: "Decor / Artchitecture",
    btn: "img/Vector.png",
    
  },
  {
    image: "img/projPhoto-2.png",
    text: "Modern Kitchan",
    info: "Decor / Artchitecture",
    btn: "img/Vector.png",
    
  },
  {
    image: "img/projPhoto-2.png",
    text: "Modern Kitchan",
    info: "Decor / Artchitecture",
    btn: "img/Vector.png",
    
  },
];

const boxEl = document.querySelector(".box-content");
// const mainBegEl = document.querySelector('.statistics');
// const mainEl = document.createElement("div");
// mainEl.classList.add("topContent");
// boxEl.insertBefore(mainEl, mainBegEl)
const mainEl = document.querySelector('.topContent');

const maintextEl = document.createElement("div");
maintextEl.classList.add("topContent_text");
mainEl.append(maintextEl);
const blockEl = document.createElement('div');
blockEl.classList.add("topContent_block")
mainEl.append(blockEl)

const textH1El = document.createElement("h1");
textH1El.classList.add("topContent_text_mainText");
textH1El.textContent = "Follow Our Projects";
maintextEl.append(textH1El);

const textPEl = document.createElement("p");
textPEl.classList.add("topContent_text_mainParag");
textPEl.textContent = "It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.";
maintextEl.append(textPEl);

dataProd.forEach((el) => {
  const itemEl = document.createElement("div");
  itemEl.classList.add("topContent_item");
  blockEl.append(itemEl);

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", el.image);
  imgEl.classList.add("topContent_item_img");
  itemEl.append(imgEl);

  const textEl = document.createElement("h1");
  textEl.classList.add("topContent_item_h1");
  textEl.textContent = el.text;
  itemEl.append(textEl);

  const infoEl = document.createElement("p");
  infoEl.classList.add("topContent_item_p");
  infoEl.textContent = el.info;
  itemEl.append(infoEl);

  const btnEl = document.createElement("button");
  btnEl.classList.add("topContent_item_btn")
  itemEl.append(btnEl);

  const imgBtnEl = document.createElement("img");
  imgBtnEl.setAttribute("src", el.btn);
  imgBtnEl.classList.add("topContent_item_btn_img");
  btnEl.append(imgBtnEl);


});
