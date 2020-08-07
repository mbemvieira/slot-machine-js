import './styles/style.css';
import * as ui from './scripts/uiHandler';

(function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(ui.start);
