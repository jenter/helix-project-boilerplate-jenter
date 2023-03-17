/**
 * Demo block for semantic accordion reference.
 */
export default async function decorate(block) {
  console.log('block html received as: ', block.innerHTML);

  const accordion = document.createElement('div');
  accordion.classList.add('accordion-wrapper-faux-semantic');
  const fauxSyntax = ['one', 'two', 'three', 'four', 'five'];

  [...block.children].forEach((row, i) => {
    const name = fauxSyntax[i];
    const details = document.createElement('details');
    details.setAttribute('title', name);
    details.setAttribute('aria-label', `details-${name}`);
    details.setAttribute('aria-label', `#${name}`);
    details.setAttribute('aria-expanded', 'false');

    const firstParagraph = row.querySelector('p:nth-child(1)');
    const secondParagraph = row.querySelector('p:nth-child(2)');
    const markup = `
        <summary aria-describedby='accordion-${name}' class='accordion-summary'>
          ${firstParagraph.innerHTML}
        </summary>
        <p id='accordion-${name}' class='accordion-full'>
          ${secondParagraph.innerHTML}
        </p>
    `;

    details.innerHTML = markup;
    accordion.append(details);
  });

  block.innerHTML = '';
  block.append(accordion);

  console.log('block html converted to: ', block.innerHTML);

  // accesibility helpers for 'aria-expanded'
  document.querySelectorAll('details').forEach((detail) => {
    detail.addEventListener('click', () => {
      detail.setAttribute(
        'aria-expanded',
        detail?.open === true ? 'false' : 'true',
      );
    });
  });
}
