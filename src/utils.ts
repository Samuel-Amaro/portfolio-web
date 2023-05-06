export function getRefs<T extends HTMLElement>(refs: React.MutableRefObject<T[] | null>) {
  if (!refs.current) {
    refs.current = [];
  }
  return refs.current;
}

export function setToFocus<T extends HTMLElement>(itemId: number, refs: React.MutableRefObject<T[] | null>) {
  const refsItems = getRefs(refs);
  const refItem = refsItems[itemId];
  refItem?.focus();
}

export function setToFocusPreviousItem<T extends HTMLElement>(itemCurrent: T, refs: React.MutableRefObject<T[] | null>) {
  const refItems = getRefs(refs);
  let itemSelected = null;
  if (itemCurrent === refItems[0]) {
    itemSelected = itemCurrent;
  } else {
    const index = refItems.indexOf(itemCurrent);
    itemSelected = refItems[index - 1];
  }
  itemSelected.focus();
}

export function setFocusNextItem<T extends HTMLElement>(itemCurrent: T, refs: React.MutableRefObject<T[] | null>) {
  const refItems = getRefs(refs);
  let itemSelected = null;
  if (itemCurrent === refItems[refItems.length - 1]) {
    itemSelected = itemCurrent;
  } else {
    const index = refItems.indexOf(itemCurrent);
    itemSelected = refItems[index + 1];
  }
  itemSelected.focus();
}