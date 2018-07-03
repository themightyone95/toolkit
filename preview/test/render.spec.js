import assert from 'assert';

import cheerio from 'cheerio';

import { renderHTML, renderListItems } from '../src/js/render';

const testMarkdown = {
  foo: `
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4

  Test paragraph.

  ---

  ---

  \`\`\`html { "container": "flush" }
  <span id="qa-example-flush"></span>
  \`\`\`

  \`\`\`html { "container": "tile" }
  <span id="qa-example-tile"/></span>
  \`\`\`

  \`\`\`html { "container": [ "overlay", "flush" ] }
  <span id="qa-example-overlay"/></span>
  \`\`\`

  \`\`\`html { "theme": "dark" }
  <span id="qa-example-dark"/></span>
  \`\`\`
  `,
};

const testListArray = ['foo', 'bar', 'baz'];

const testListObject = {
  foo: '...',
  bar: '...',
  baz: '...',
};

describe('Preview: Render', () => {
  describe('renderHTML()', () => {
    const wrapper = cheerio.load(renderHTML(testMarkdown));

    it('should remove paragraphs', () => {
      assert.equal(wrapper('p').length, 0);
    });

    it('should only render one horizontal rule at the end of a section', () => {
      assert.equal(wrapper('hr').length, 1);
    });

    // prettier-ignore
    it('should assign custom classes to headings', () => {
      assert.equal(wrapper('h1').attr('class').includes('qa-heading-1'), true);
      assert.equal(wrapper('h2').attr('class').includes('qa-heading-2'), true);
      assert.equal(wrapper('h3').attr('class').includes('qa-heading-3'), true);
      assert.equal(wrapper('h4').attr('class').includes('qa-heading-4'), true);
    });

    it('should set custom container classes when defined', () => {
      assert.equal(
        wrapper('#qa-example-flush')
          .parent()
          .attr('class')
          .includes('qa-container-flush'),
        true
      );
      assert.equal(
        wrapper('#qa-example-tile')
          .parent()
          .attr('class')
          .includes('qa-container-tile'),
        true
      );
      assert.equal(
        wrapper('#qa-example-overlay')
          .parent()
          .attr('class')
          .includes('qa-container-overlay', 'qa-container-flush'),
        true
      );
    });

    it('should set dark example classes when defined', () => {
      assert.equal(wrapper('.qa-theme-dark #qa-example-dark').length, 1);
    });
  });

  describe('renderListItems()', () => {
    it('should render a plain text list when provided with an array', () => {
      const wrapper = cheerio.load(renderListItems(testListArray));
      assert.equal(wrapper('li').length, 3);
      assert.equal(wrapper('li a').length, 0);
    });

    it('should render a list of links when provided with an object', () => {
      const wrapper = cheerio.load(renderListItems(testListObject));
      assert.equal(wrapper('li').length, 3);
      assert.equal(wrapper('li a[href=#foo]').length, 1);
      assert.equal(wrapper('li a[href=#bar]').length, 1);
      assert.equal(wrapper('li a[href=#baz]').length, 1);
    });
  });
});
