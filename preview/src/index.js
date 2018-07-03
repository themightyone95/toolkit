import { components, componentsUndocumented } from './js/data';
import { renderHTML, renderListItems } from './js/render';

import './index.scss';

document.getElementById('components-list').innerHTML = renderListItems(components);
document.getElementById('components-undocumented-list').innerHTML = renderListItems(componentsUndocumented);
document.getElementById('main').innerHTML = renderHTML(components);
