import remark from 'remark';
import html from 'remark-html';
import frontmatter from 'remark-frontmatter';

import format from './format';
import { capitalizeFirstLetter } from './utils';

const renderListItems = components =>
  Array.isArray(components)
    ? components.reduce(
        (str, component) => `${str}
        <li class="o-list-block__item c-text-body">
          ${capitalizeFirstLetter(component)}
        </li>`,
        ''
      )
    : Object.keys(components).reduce(
        (str, component) => `${str}
        <li class="o-list-block__item c-text-body">
          <a href="#${component}">${capitalizeFirstLetter(component)}</a>
        </li>`,
        ''
      );

const renderHTML = components => {
  let output = '';
  const keyline = `<hr class="c-keyline"/>`;

  for (const [key, value] of Object.entries(components)) {
    remark()
      .use(frontmatter, ['yaml'])
      .use(format)
      .use(html)
      // eslint-disable-next-line
      .process(value, function(err, file) {
        output += `
          <section id="${key}" class="o-container u-padding-bottom">
            ${file}
          </section>
          ${keyline}`;
      });
  }

  return output;
};

export { renderHTML, renderListItems };
