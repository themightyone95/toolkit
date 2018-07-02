import visit from 'unist-util-visit';
import remove from 'unist-util-remove';

const format = () => {
  const getMeta = node => {
    const reg = /(.*) (\{.*\})/gi;
    const matches = reg.exec(node.lang);

    if (matches) {
      const meta = matches[2];
      return JSON.parse(meta);
    } else {
      return {};
    }
  };

  const formatCodeBlocks = node => {
    const meta = getMeta(node);

    const containerClasses = container => {
      const classes = {
        flush: 'u-breakout qa-container-flush',
        tile: 'c-example--tile qa-container-tile',
        overlay: 'u-breakout c-example--overlay qa-container-overlay',
      };

      const classList = containerList => {
        if (Array.isArray(containerList)) {
          const containerClassList = containerList.map(containerItem => classes[containerItem]);
          return containerClassList.join(' ');
        } else {
          return classes[containerList];
        }
      };

      return container ? classList(container) : '';
    };

    const example = `
      <div class="c-example ${containerClasses(meta.container)}">
        ${node.value}
      </div>
    `;

    const exampleDarkWrapper = `
      <div class="c-panel c-panel--dark u-padding-top u-padding-bottom is-open qa-theme-dark">
        <div class="o-container">
          ${example}
        </div>
      </div>
    `;

    const renderExample = theme => (theme === 'dark' ? exampleDarkWrapper : example);

    node.type = 'html';
    node.value = renderExample(meta.theme);

    return [node.type, node.value];
  };

  const formatHeadings = node => {
    const headingClasses = {
      1: 'c-heading-bravo qa-heading-1',
      2: 'c-heading-charlie qa-heading-2',
      3: 'c-heading-delta qa-heading-3',
      4: 'c-text-lead qa-heading-4',
    };

    if (node.type === 'heading' && node.depth in headingClasses) {
      const headingClass = headingClasses[node.depth];

      node.data = { hProperties: { className: headingClass } };

      return node.data;
    }
  };

  return tree => {
    remove(tree, 'paragraph');
    remove(tree, 'thematicBreak');
    visit(tree, 'code', formatCodeBlocks);
    visit(tree, 'heading', formatHeadings);
  };
};

export default format;
