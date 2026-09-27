const searchItems = [
  ["Bedroom Organization","/bedroom-organization/","Ideas, storage and practical bedroom solutions."],
  ["Kitchen Organization","/kitchen-organization/","Storage ideas for a cleaner, easier kitchen."],
  ["Small Space Organization","/small-space-organization/","Make compact rooms feel more open and useful."],
  ["Storage Ideas","/storage-ideas/","Simple ways to give everything a place."],
  ["Home Office Organization","/home-office/","Build a calmer, more organized workspace."],
  ["Home Decor","/home-decor/","Simple styling ideas for a comfortable home."],
  ["15 Small Bedroom Organization Ideas","/articles/small-bedroom-organization/","Practical ideas for creating more storage."],
  ["20 Small Space Storage Ideas","/articles/small-space-storage-ideas/","Clever ways to save space."],
  ["15 Kitchen Organization Ideas","/articles/kitchen-organization-ideas/","Easy kitchen organization ideas."],
  ["10 Easy Wardrobe Organization Ideas","/articles/wardrobe-organization/","A simpler wardrobe routine."],
  ["15 Under-Bed Storage Ideas","/articles/under-bed-storage/","Use overlooked space beneath your bed."],
  ["12 Home Organization Products Worth Buying","/articles/home-organization-products/","Useful products for everyday organization."],
  ["15 Minimalist Home Decor Ideas","/articles/minimalist-home-decor/","A calmer approach to styling."],
  ["10 Small Home Office Organization Ideas","/articles/small-home-office/","Create a focused workspace."],
  ["15 Kitchen Storage Products for Small Spaces","/articles/kitchen-storage-products/","Products that make small kitchens work harder."],
  ["20 Simple Home Organization Ideas for a Small Apartment","/articles/small-apartment-organization/","Room-by-room ideas for apartment living."]
];

document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-toggle"), panel=document.querySelector(".mobile-panel");
  if(menu){menu.addEventListener("click",()=>{const open=panel.classList.toggle("open");menu.setAttribute("aria-expanded",open);});}
  const overlay=document.querySelector(".search-overlay"), input=document.querySelector("#site-search"), results=document.querySelector("#search-results");
  const openSearch=()=>{overlay.classList.add("open");overlay.setAttribute("aria-hidden","false");setTimeout(()=>input?.focus(),50)};
  const closeSearch=()=>{overlay.classList.remove("open");overlay.setAttribute("aria-hidden","true")};
  document.querySelectorAll(".search-trigger").forEach(b=>b.addEventListener("click",openSearch));
  document.querySelector(".search-close")?.addEventListener("click",closeSearch);
  overlay?.addEventListener("click",e=>{if(e.target===overlay)closeSearch()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeSearch()});
  input?.addEventListener("input",()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){results.innerHTML="";return}
    const found=searchItems.filter(x=>(x[0]+" "+x[2]).toLowerCase().includes(q)).slice(0,7);
    results.innerHTML=found.length?found.map(x=>`<a class="search-result" href="${x[1]}"><strong>${x[0]}</strong><small>${x[2]}</small></a>`).join(""):"<p>No matching guide yet. Try another phrase.</p>";
  });
});
