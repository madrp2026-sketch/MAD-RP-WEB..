const SHOP=[
 {g:'Vehículos',items:[
  {n:'Carros VIP',img:'carros-vip',p:'$15.00',d:'Accede a vehículos de categoría VIP, seleccionados para quienes buscan estilo, velocidad y distinción.',pos:'50% 60%'},
  {n:'Carros Exclusivos',img:'carros-exclusivos',p:'$45.00',d:'Vehículos especiales de alta gama, diseños únicos y modelos exclusivos para destacar en las calles de Los Santos.',pos:'50% 60%'}]},
 {g:'Propiedades',items:[
  {n:'Negocios',img:'negocios',p:'$30',u:'dólares',d:'Adquiere tu propio establecimiento y conviértete en parte de la economía de la ciudad. Ideal para restaurantes, bares, talleres y otros emprendimientos.',pos:'50% 55%'},
  {n:'Casas MLO',img:'casas-mlo',p:'$25',u:'dólares',d:'Obtén una propiedad con interiores personalizados MLO y disfruta de un espacio exclusivo para tu personaje.',pos:'50% 45%'},
  {n:'Ranchos',img:'ranchos',p:'$50',u:'dólares',d:'Disfruta de un amplio terreno privado, perfecto para crear tu propio refugio, organizar reuniones y desarrollar tu historia.',pos:'50% 50%'},
  {n:'Islas privadas',img:'islas-privadas',p:'$100',u:'dólares',d:'La máxima exclusividad. Consigue tu propia isla privada y disfruta de una ubicación única y privilegiada dentro de la ciudad.',pos:'50% 55%'}]}];
(()=>{
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const box=document.getElementById('shopList'); if(!box) return;
 box.innerHTML=SHOP.map(s=>`<h3 class="shop-group">${esc(s.g)}</h3><div class="shop-grid">${s.items.map(i=>`<article class="shop-card" tabindex="0"><div class="shop-ph"><img src="images/tienda/${i.img}.jpg" alt="${esc(i.n)}" loading="lazy" style="object-position:${i.pos}"></div><div class="shop-body"><h3>${esc(i.n)}</h3><p>${esc(i.d)}</p><div class="shop-price"><b>${esc(i.p)}</b>${i.u?`<small>${esc(i.u)}</small>`:''}</div></div></article>`).join('')}</div>`).join('');
 const cards=[...box.querySelectorAll('.shop-card')], fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
 cards.forEach(c=>{
  if(fine){
   c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--ry',(x*7).toFixed(2)+'deg');c.style.setProperty('--rx',(-y*7).toFixed(2)+'deg')});
   c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
  } else c.addEventListener('click',()=>{const on=c.classList.contains('on');cards.forEach(x=>x.classList.remove('on'));if(!on)c.classList.add('on')});
 });
 const fab=document.getElementById('shopFab');
 fab&&fab.addEventListener('click',()=>document.getElementById('tienda').scrollIntoView({behavior:'smooth'}));
})();
