export default function decorate(block) {
  // Hero trends block structure:
  // Row 1: Author byline (optional)
  // Row 2: Heading
  // Row 3: Description
  // Row 4: CTA text (optional)
  // Row 5: Button
  // Row 6: Image

  const rows = [...block.children];

  // Create the content wrapper
  const content = document.createElement('div');
  content.className = 'hero-trends-content';

  // Process author byline (Row 1)
  if (rows[0]) {
    const author = rows[0].querySelector('p');
    if (author && author.textContent.trim()) {
      const authorDiv = document.createElement('div');
      authorDiv.className = 'hero-trends-author';
      authorDiv.textContent = author.textContent;
      content.appendChild(authorDiv);
    }
  }

  // Process heading (Row 2)
  if (rows[1]) {
    const heading = rows[1].querySelector('h1, h2, h3, h4, h5, h6, p');
    if (heading) {
      const h1 = document.createElement('h1');
      h1.className = 'hero-trends-heading';
      h1.innerHTML = heading.innerHTML;
      content.appendChild(h1);
    }
  }

  // Process description (Row 3)
  if (rows[2]) {
    const desc = rows[2].querySelector('p');
    if (desc) {
      const descDiv = document.createElement('div');
      descDiv.className = 'hero-trends-description';
      descDiv.innerHTML = desc.innerHTML;
      content.appendChild(descDiv);
    }
  }

  // Process CTA text (Row 4)
  if (rows[3]) {
    const ctaText = rows[3].querySelector('p');
    if (ctaText && ctaText.textContent.trim()) {
      const ctaTextDiv = document.createElement('div');
      ctaTextDiv.className = 'hero-trends-cta-text';
      ctaTextDiv.innerHTML = ctaText.innerHTML;
      content.appendChild(ctaTextDiv);
    }
  }

  // Process button (Row 5)
  if (rows[4]) {
    const button = rows[4].querySelector('a, .button');
    if (button) {
      button.className = 'button hero-trends-button';
      content.appendChild(button);
    }
  }

  // Process image (Row 6)
  let imageDiv = null;
  if (rows[5]) {
    const img = rows[5].querySelector('img');
    if (img) {
      imageDiv = document.createElement('div');
      imageDiv.className = 'hero-trends-image';
      imageDiv.appendChild(img);
    }
  }

  // Clear the block and rebuild
  block.innerHTML = '';
  block.appendChild(content);

  if (imageDiv) {
    block.appendChild(imageDiv);
  }
}
