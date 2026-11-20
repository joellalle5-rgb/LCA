const nav=$('nav'),main=$('main');
function show(id){
  const tab=DATA.tabs.find(t=>t.id===id)||DATA.tabs[0];
  Store.set('tab',tab.id);
  nav.querySelectorAll('button').forEach(b=>b.setAttribute('aria-current',b.dataset.id===tab.id));
  main.replaceChildren(...R[tab.type||'blocks'](tab));
  updateProg();window.scrollTo(0,0);
}
DATA.tabs.forEach(t=>nav.append(el('button',{type:'button','data-id':t.id,onclick:()=>show(t.id)},t.label)));
$('reset').onclick=()=>{if(confirm('Effacer les cases cochées et les fiches enregistrées ?')){Store.clear();checks={};show(Store.get('tab','cadrage'))}};
$('theme').onclick=()=>{const r=document.documentElement,d=r.dataset.theme==='dark'||(!r.dataset.theme&&matchMedia('(prefers-color-scheme:dark)').matches);r.dataset.theme=d?'light':'dark';Store.set('theme',r.dataset.theme)};
const th=Store.get('theme');if(th)document.documentElement.dataset.theme=th;
show(Store.get('tab','cadrage'));
