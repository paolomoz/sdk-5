/**
 * Hero Trends Block
 * Displays a hero section with byline, large stacked headline, description, CTA text, button, and image
 *
 * Expected structure:
 * Row 1: Byline (small text, e.g., "by Taylor Brooks")
 * Row 2: Main headline (large text, can be multi-line, e.g., "Trends\nthat\nturn\nheads")
 * Row 3: Description text (paragraph)
 * Row 4: CTA text (secondary paragraph)
 * Row 5: Button link
 * Row 6: Image
 */

export default function decorate(block) {
  const rows = Array.from(block.children);

  // Extract content from rows
  const byline = rows[0]?.textContent.trim() || '';
  const headline = rows[1]?.textContent.trim() || '';
  const description = rows[2]?.textContent.trim() || '';
  const ctaText = rows[3]?.textContent.trim() || '';
  const buttonElement = rows[4]?.querySelector('a');
  const imageElement = rows[5]?.querySelector('picture') || rows[5]?.querySelector('img');

  // Clear the block
  block.innerHTML = '';

  // Create container
  const container = document.createElement('div');
  container.className = 'hero-trends-container';

  // Create content column
  const contentColumn = document.createElement('div');
  contentColumn.className = 'hero-trends-content';

  // Add byline
  if (byline) {
    const bylineElement = document.createElement('p');
    bylineElement.className = 'hero-trends-byline';
    bylineElement.textContent = byline;
    contentColumn.appendChild(bylineElement);
  }

  // Add headline (split on newlines and create separate lines)
  if (headline) {
    const headlineContainer = document.createElement('h1');
    headlineContainer.className = 'hero-trends-headline';

    // Split headline by newlines and create separate lines
    const lines = headline.split('\n').map(line => line.trim()).filter(line => line);
    lines.forEach((line, index) => {
      const lineElement = document.createElement('span');
      lineElement.className = 'hero-trends-headline-line';
      lineElement.textContent = line;
      headlineContainer.appendChild(lineElement);

      // Add line break between lines (except after last)
      if (index < lines.length - 1) {
        headlineContainer.appendChild(document.createElement('br'));
      }
    });

    contentColumn.appendChild(headlineContainer);
  }

  // Add description
  if (description) {
    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'hero-trends-description';
    descriptionElement.textContent = description;
    contentColumn.appendChild(descriptionElement);
  }

  // Add CTA text
  if (ctaText) {
    const ctaElement = document.createElement('p');
    ctaElement.className = 'hero-trends-cta-text';
    ctaElement.textContent = ctaText;
    contentColumn.appendChild(ctaElement);
  }

  // Add button
  if (buttonElement) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'hero-trends-button-wrapper';

    const button = buttonElement.cloneNode(true);
    button.className = 'hero-trends-button button';
    buttonWrapper.appendChild(button);

    contentColumn.appendChild(buttonWrapper);
  }

  container.appendChild(contentColumn);

  // Create image column
  if (imageElement) {
    const imageColumn = document.createElement('div');
    imageColumn.className = 'hero-trends-image';

    const clonedImage = imageElement.cloneNode(true);
    imageColumn.appendChild(clonedImage);

    container.appendChild(imageColumn);
  }

  block.appendChild(container);
}
