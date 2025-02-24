export function isOutsideClick(source: HTMLElement, event: MouseEvent) {
  const target = event.target as Node;
  if (target) {
    if (target === source || source.contains(target)) {
      return false;
    }
  }
  return true;
}
