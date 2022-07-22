let current = null;

export function dragStart(items, item){
  current = item
  for (let b = 0; b < items.length; b += 1) {
      const it = items[b];
      if (it === current) {
      it.classList.add('border');
    }
  }
}

export function dragEnter(item){
  if (item !== current) {
    item.style.opacity = 0.2;
  }
}

export function dragLeave(item){
  if (item === current) {
    item.style.visibility = 'hidden';
  } else {
   item.style.opacity = 1;
  }
}

export function dragEnd(items, item){
    console.log(item)
  for (let a = 0; a < items.length; a += 1) {
    const it = items[a];
    it.classList.remove('border');
    item.style.visibility = 'visible';
    it.style.opacity = 1;
  }
}

export function drop(items, item){
  if (item !== current) {
    let currentpos = 0;
    let droppedpos = 0;
    for (let it = 0; it < items.length; it += 1) {
      if (current === items[it]) {
        currentpos = it;
      }
      if (item === items[it]) {
        droppedpos = it;
      }
    }
    if (currentpos < droppedpos) {
      item.parentNode.insertBefore(current, item.nextSibling);
    } else {
      item.parentNode.insertBefore(current, item);
    }
  }
}