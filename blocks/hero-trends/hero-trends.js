export default function decorate(block) {
  // Hero-trends block structure:
  // Row 1: Byline (optional)
  // Row 2: Main heading (multi-line)
  // Row 3: Description text
  // Row 4: Secondary text (optional)
  // Row 5: CTA button
  // Row 6: Hero image

  const rows = [...block.children];

  // Create container
  const container = document.createElement('div');
  container.classList.add('hero-trends-container');

  // Create content wrapper (left side)
  const content = document.createElement('div');
  content.classList.add('hero-trends-content');

  // Create image wrapper (right side)
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('hero-trends-image');

  // Process rows
  rows.forEach((row, index) => {
    const cells = [...row.children];

    if (index === 0 && cells[0]?.textContent.trim()) {
      // Byline
      const byline = document.createElement('div');
      byline.classList.add('hero-trends-byline');
      byline.textContent = cells[0].textContent;
      content.appendChild(byline);
    } else if (index === 1) {
      // Main heading
      const heading = document.createElement('h1');
      heading.classList.add('hero-trends-heading');
      heading.innerHTML = cells[0].innerHTML;
      content.appendChild(heading);
    } else if (index === 2) {
      // Description
      const description = document.createElement('div');
      description.classList.add('hero-trends-description');
      description.innerHTML = cells[0].innerHTML;
      content.appendChild(description);
    } else if (index === 3 && cells[0]?.textContent.trim()) {
      // Secondary text
      const secondary = document.createElement('div');
      secondary.classList.add('hero-trends-secondary');
      secondary.innerHTML = cells[0].innerHTML;
      content.appendChild(secondary);
    } else if (index === 4) {
      // CTA button
      const ctaWrapper = document.createElement('div');
      ctaWrapper.classList.add('hero-trends-cta');
      const link = cells[0].querySelector('a');
      if (link) {
        link.classList.add('button');
        ctaWrapper.appendChild(link);
      }
      content.appendChild(ctaWrapper);
    } else if (index === 5) {
      // Hero image
      const img = cells[0].querySelector('img');
      if (img) {
        imageWrapper.appendChild(img);
      }
    }
  });

  // Assemble the block
  container.appendChild(content);
  container.appendChild(imageWrapper);

  block.textContent = '';
  block.appendChild(container);
}
