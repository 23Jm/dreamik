//filtering based  on themes, names, type etc
const cards=document.querySelectorAll(".pro");
const searchBox=document.querySelector("#search");

searchBox.addEventListener("keyup",(e)=>{
  const searchText=e.target.value.toLowerCase().trim();
  cards.forEach((card)=>{
    const data=card.dataset.item;
    if(data.includes(searchText))
    {
      card.style.display="block";
    }
    else{
      card.style.display="none";
    }
  })
})