const components = [
  'bezel',
  'buttons',
  'calendar',
  'divider',
  'dropdown',
  'forms',
  'hero',
  'links',
  'panel',
  'select',
  'shine',
  'spinner',
  'tables',
  'tile',
  'tooltip',
];

const componentsUndocumented = [
  'accordion',
  'card',
  'costing',
  'link-faux',
  'links',
  'price',
  'roundel',
  'switch',
  'tabs',
  'typography',
];

const componentsFullPage = ['modal', 'overlay'];

const reduceMarkdown = comps => {
  return comps.reduce((docs, component) => {
    docs[component] = require(`sky-toolkit-ui/docs/components/${component}.md`);
    return docs;
  }, {});
};

const componentsData = reduceMarkdown(components);

export { componentsData as components, componentsUndocumented, componentsFullPage };
