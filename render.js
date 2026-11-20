const $=id=>document.getElementById(id);
const el=(t,a={},...c)=>{const n=document.createElement(t);for(const[k,v]of Object.entries(a))k.startsWith('on')?n.addEventListener(k.slice(2),v):n.setAttribute(k,v);n.append(...c.flat().filter(x=>x!=null));return n};
let checks=Store.get('checks',{});

function updateCount(d){
  const all=d.querySelectorAll('input[type=checkbox]');
  d.querySelector('summary small').textContent=[...all].filter(x=>x.checked).length+'/'+all.length;
}
function updateProg(){
  const done=Object.values(checks).filter(Boolean).length;
  $('prog').textContent=done+' point(s) coché(s)';
}
function checklist(key,items){
  return items.map((txt,i)=>{
    const id=key+'.'+i,cb=el('input',{type:'checkbox'});
    cb.checked=!!checks[id];
    cb.addEventListener('change',()=>{checks[id]=cb.checked;Store.set('checks',checks);updateProg();updateCount(cb.closest('details'))});
    return el('label',{class:'ck'},cb,el('span',{},txt));
  });
}
function block(key,b,open){
  const det=el('details',open?{open:''}:{});
  det.append(el('summary',{},el('span',{},b.t),el('small',{},'')));
  const body=el('div',{class:'body'});
  if(b.obj)body.append(el('p',{class:'intro'},b.obj));
  if(b.items)body.append(el('h4',{},b.h||'À vérifier'),...checklist(key,b.items));
  if(b.warn)body.append(el('h4',{},'Signaux d’alerte'),...b.warn.map(w=>el('div',{class:'warn'},w)));
  det.append(body);updateCount(det);
  return det;
}
const head=tab=>[el('h2',{},tab.label),el('p',{class:'intro'},tab.intro)];

const R={
  blocks:tab=>[...head(tab),...tab.blocks.map((b,i)=>block(tab.id+i,b,i===0))],
  passes(tab){
    let s=300,run=null;
    const out=el('span',{class:'timer'},'5:00');
    const fmt=()=>out.textContent=Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
    const go=el('button',{type:'button'},'Démarrer le triage');
    go.onclick=()=>{
      if(run){clearInterval(run);run=null;go.textContent='Reprendre';return}
      go.textContent='Pause';
      run=setInterval(()=>{s--;fmt();if(s<=0){clearInterval(run);run=null;go.textContent='Temps écoulé : décidez'}},1000);
    };
    const rz=el('button',{type:'button'},'Remettre à 5:00');
    rz.onclick=()=>{clearInterval(run);run=null;s=300;fmt();go.textContent='Démarrer le triage'};
    return[...head(tab),el('div',{class:'row noprint'},out,go,rz),...tab.blocks.map((b,i)=>block(tab.id+i,b,i===0))];
  },
  design(tab){
    const sel=el('select',{'aria-label':'Design de l’étude'},...Object.entries(DATA.designs).map(([k,d])=>el('option',{value:k},d.label)));
    const box=el('div');
    const draw=()=>{
      const k=sel.value,d=DATA.designs[k];Store.set('design',k);
      box.replaceChildren(
        block('d.'+k+'.v',{t:'Points de vigilance',items:d.vig,warn:d.warn},true),
        block('d.'+k+'.q',{t:'Qualité : '+d.outil,h:'Questions à vous poser',items:d.q}),
        block('d.'+k+'.r',{t:'Rapportage : '+d.rep,h:'Vérifiez que l’article rapporte',items:d.repItems}));
    };
    sel.value=Store.get('design','essai');sel.onchange=draw;draw();
    return[...head(tab),el('div',{class:'row'},sel),box];
  },
  notes(tab){
    const list=Store.get('fiches',[]),form=el('div',{class:'form'}),vals={};
    DATA.champs.forEach(c=>{
      const f=c.long?el('textarea',{rows:2}):c.opts?el('select',{},...c.opts.map(o=>el('option',{},o))):el('input',{type:'text'});
      vals[c.k]=f;form.append(el('div',{class:c.long?'w':''},el('label',{},c.l,f)));
    });
    const ul=el('div');
    const drawList=()=>ul.replaceChildren(...list.map((f,i)=>{
      const del=el('button',{type:'button'},'Supprimer');
      del.onclick=()=>{list.splice(i,1);Store.set('fiches',list);drawList()};
      return el('div',{class:'fiche'},el('span',{},(f.ref||'(sans référence)')+' · '+(f.decision||'')),del);
    }));
    const add=el('button',{type:'button'},'Ajouter la fiche');
    add.onclick=()=>{const f={};DATA.champs.forEach(c=>{f[c.k]=vals[c.k].value;if(!c.opts)vals[c.k].value=''});list.push(f);Store.set('fiches',list);drawList()};
    const exp=el('button',{type:'button'},'Exporter en Markdown');
    exp.onclick=()=>{
      const md=list.map(f=>'## '+(f.ref||'Sans référence')+'\n'+DATA.champs.filter(c=>c.k!=='ref').map(c=>'- **'+c.l+'** : '+(f[c.k]||'').replace(/\n/g,' ')).join('\n')).join('\n\n');
      const a=el('a',{href:URL.createObjectURL(new Blob([md],{type:'text/markdown'})),download:'fiches-lecture.md'});a.click();URL.revokeObjectURL(a.href);
    };
    drawList();
    return[...head(tab),form,el('div',{class:'row'},add,exp),ul];
  },
  gloss:tab=>[...head(tab),el('dl',{},...DATA.gloss.flatMap(([t,d])=>[el('dt',{},t),el('dd',{},d)])),el('h2',{},'Ressources'),el('dl',{},...DATA.res.flatMap(([t,d])=>[el('dt',{},t),el('dd',{},d)]))]
};
