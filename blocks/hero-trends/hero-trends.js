export default function decorate(block) {
  // Hero-trends block structure:
  // Row 1: Byline (optional)
  // Row 2: Image
  // Row 3: Heading
  // Row 4: Description
  // Row 5: Call-to-action text (optional)
  // Row 6: Button link (optional)

  const rows = [...block.children];

  // Create the content wrapper (left side)
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-trends-content';

  // Create the image wrapper (right side)
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'hero-trends-image';

  // Process byline (row 0) - optional
  if (rows[0]) {
    const byline = rows[0].querySelector('p');
    if (byline && byline.textContent.trim()) {
      byline.className = 'hero-trends-byline';
      contentWrapper.appendChild(byline);
    }
  }

  // Process image (row 1)
  if (rows[1]) {
    const img = rows[1].querySelector('img');
    if (img) {
      imageWrapper.appendChild(img);
    }
  }

  // Process heading (row 2)
  if (rows[2]) {
    const heading = rows[2].querySelector('h1, h2, h3, p');
    if (heading) {
      if (heading.tagName !== 'H1') {
        const h1 = document.createElement('h1');
        h1.innerHTML = heading.innerHTML;
        heading.replaceWith(h1);
        contentWrapper.appendChild(h1);
      } else {
        contentWrapper.appendChild(heading);
      }
    }
  }

  // Process description (row 3)
  if (rows[3]) {
    const description = rows[3].querySelector('p');
    if (description) {
      description.className = 'hero-trends-description';
      contentWrapper.appendChild(description);
    }
  }

  // Process CTA text (row 4) - optional
  if (rows[4]) {
    const ctaText = rows[4].querySelector('p');
    if (ctaText && ctaText.textContent.trim()) {
      ctaText.className = 'hero-trends-cta-text';
      contentWrapper.appendChild(ctaText);
    }
  }

  // Process button (row 5) - optional
  if (rows[5]) {
    const link = rows[5].querySelector('a');
    if (link) {
      link.className = 'button';
      const buttonWrapper = document.createElement('div');
      buttonWrapper.className = 'hero-trends-button-wrapper';
      buttonWrapper.appendChild(link);
      contentWrapper.appendChild(buttonWrapper);
    }
  }

  // Clear the block and rebuild with new structure
  block.innerHTML = '';
  block.appendChild(contentWrapper);
  block.appendChild(imageWrapper);
}
