export default function decorate(block) {
  // Hero-trends block structure from authoring:
  // Row 1: Byline (e.g., "BY TAYLOR BROOKS")
  // Row 2: Heading (e.g., "Trends that turn heads")
  // Row 3: Description paragraph
  // Row 4: Subtext (small text about joining)
  // Row 5: CTA button text (e.g., "Subscribe")
  // Row 6: Image

  const rows = [...block.children];

  // Extract content from rows
  const byline = rows[0]?.textContent.trim() || '';
  const heading = rows[1]?.textContent.trim() || '';
  const description = rows[2]?.innerHTML || '';
  const subtext = rows[3]?.textContent.trim() || '';
  const ctaText = rows[4]?.textContent.trim() || '';
  const imageRow = rows[5];

  // Get image element
  const img = imageRow?.querySelector('img');

  // Clear the block
  block.innerHTML = '';

  // Create content wrapper (left side)
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-trends-content';

  // Add byline
  if (byline) {
    const bylineEl = document.createElement('div');
    bylineEl.className = 'hero-trends-byline';
    bylineEl.textContent = byline;
    contentWrapper.appendChild(bylineEl);
  }

  // Add heading
  if (heading) {
    const headingEl = document.createElement('h1');
    headingEl.className = 'hero-trends-heading';
    // Split heading into lines for stacked effect
    const lines = heading.split(' ');
    lines.forEach((line, index) => {
      const lineEl = document.createElement('span');
      lineEl.textContent = line;
      headingEl.appendChild(lineEl);
      if (index < lines.length - 1) {
        headingEl.appendChild(document.createElement('br'));
      }
    });
    contentWrapper.appendChild(headingEl);
  }

  // Add description
  if (description) {
    const descEl = document.createElement('div');
    descEl.className = 'hero-trends-description';
    descEl.innerHTML = description;
    contentWrapper.appendChild(descEl);
  }

  // Add subtext
  if (subtext) {
    const subtextEl = document.createElement('div');
    subtextEl.className = 'hero-trends-subtext';
    subtextEl.textContent = subtext;
    contentWrapper.appendChild(subtextEl);
  }

  // Add CTA button
  if (ctaText) {
    const ctaWrapper = document.createElement('div');
    ctaWrapper.className = 'hero-trends-cta';

    // Check if there's a link in the row
    const link = rows[4]?.querySelector('a');
    if (link) {
      link.className = 'button';
      link.textContent = ctaText;
      ctaWrapper.appendChild(link);
    } else {
      const button = document.createElement('a');
      button.className = 'button';
      button.href = '#';
      button.textContent = ctaText;
      ctaWrapper.appendChild(button);
    }

    contentWrapper.appendChild(ctaWrapper);
  }

  // Create image wrapper (right side)
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'hero-trends-image';

  if (img) {
    imageWrapper.appendChild(img);
  }

  // Append both sections to block
  block.appendChild(contentWrapper);
  block.appendChild(imageWrapper);
}
