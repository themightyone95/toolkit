import { components, componentsFullPage, componentsUndocumented } from './js/data';
import { renderHTML, renderListItems } from './js/render';

import './index.scss';

document.getElementById('components-list').innerHTML = renderListItems(components);
document.getElementById('components-fullpage-list').innerHTML = renderListItems(componentsFullPage);
document.getElementById('components-undocumented-list').innerHTML = renderListItems(componentsUndocumented);
document.getElementById('main').innerHTML = renderHTML(components);
