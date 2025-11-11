/**
 * Hero Trends Block
 * A split-layout hero block featuring text content on the left and an image on the right
 * with a distinctive light cyan background and bold typography.
 */

export default function decorate(block) {
  // Expected structure from markdown:
  // Row 1: byline | image (rowspan)
  // Row 2: heading |
  // Row 3: body |
  // Row 4: cta-text |
  // Row 5: button-text |

  const rows = Array.from(block.children);

  if (rows.length < 5) {
    console.warn('Hero Trends block requires at least 5 rows');
    return;
  }

  // Extract content from rows
  const bylineRow = rows[0];
  const headingRow = rows[1];
  const bodyRow = rows[2];
  const ctaTextRow = rows[3];
  const buttonRow = rows[4];

  // Get the image from first row, second cell
  const imageCell = bylineRow.querySelector('div:last-child');
  const picture = imageCell?.querySelector('picture');

  // Create the content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'hero-trends-content';

  // Create byline
  const byline = document.createElement('div');
  byline.className = 'hero-trends-byline';
  byline.textContent = bylineRow.querySelector('div:first-child')?.textContent.trim() || '';
  contentWrapper.appendChild(byline);

  // Create heading
  const heading = document.createElement('h1');
  heading.className = 'hero-trends-heading';
  heading.textContent = headingRow.querySelector('div:first-child')?.textContent.trim() || '';
  contentWrapper.appendChild(heading);

  // Create body text
  const body = document.createElement('p');
  body.className = 'hero-trends-body';
  body.textContent = bodyRow.querySelector('div:first-child')?.textContent.trim() || '';
  contentWrapper.appendChild(body);

  // Create CTA wrapper
  const ctaWrapper = document.createElement('div');
  ctaWrapper.className = 'hero-trends-cta-wrapper';

  // Create CTA text
  const ctaText = document.createElement('p');
  ctaText.className = 'hero-trends-cta-text';
  ctaText.textContent = ctaTextRow.querySelector('div:first-child')?.textContent.trim() || '';
  ctaWrapper.appendChild(ctaText);

  // Create button
  const button = document.createElement('button');
  button.className = 'hero-trends-button';

  // Check if button row contains a link
  const buttonLink = buttonRow.querySelector('a');
  if (buttonLink) {
    button.textContent = buttonLink.textContent.trim();
    button.onclick = () => {
      window.location.href = buttonLink.href;
    };
  } else {
    button.textContent = buttonRow.querySelector('div:first-child')?.textContent.trim() || 'Subscribe';
  }

  ctaWrapper.appendChild(button);
  contentWrapper.appendChild(ctaWrapper);

  // Create image wrapper
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'hero-trends-image';

  if (picture) {
    imageWrapper.appendChild(picture.cloneNode(true));
  }

  // Clear block and rebuild
  block.textContent = '';
  block.appendChild(contentWrapper);
  block.appendChild(imageWrapper);
}
