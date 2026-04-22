// Used to fix grid spacing since image sizes are dynamic

const root = document.documentElement;
const lineSpacing = parseFloat(getComputedStyle(root).getPropertyValue("--line-spacing"));

const resizeObserver = new ResizeObserver(() => {
  const photosContainer = document.getElementById('photos-container');
  const styles = window.getComputedStyle(photosContainer);
  const rowHeight = parseFloat(styles.getPropertyValue('grid-template-rows').split(' ')[0]);

  const snappedHeight = Math.round(rowHeight / lineSpacing) * lineSpacing;
  const rowGap = snappedHeight - rowHeight + lineSpacing;

  const rowGapPx = `${rowGap}px`;
  photosContainer.style.rowGap = rowGapPx;
  photosContainer.style.paddingBottom = rowGapPx;
});

document.addEventListener('DOMContentLoaded', () => {
  resizeObserver.observe(root);
}, { once: true });