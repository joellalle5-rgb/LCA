const Store={
  get(k,d){try{const v=localStorage.getItem('lrp:'+k);return v===null?d:JSON.parse(v)}catch{return d}},
  set(k,v){try{localStorage.setItem('lrp:'+k,JSON.stringify(v))}catch{}},
  clear(){try{Object.keys(localStorage).filter(k=>k.startsWith('lrp:')&&k!=='lrp:theme').forEach(k=>localStorage.removeItem(k))}catch{}}
};
