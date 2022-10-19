import * as monaco from 'monaco-editor';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Monaco with Vite</h1>
    <div id="container" style="width: 500px; height: 500px;" />
  </div>
`;

self.MonacoEnvironment = {
	getWorker: function (workerId, label) {
		switch (label) {
			case 'json':
				return new JsonWorker();
			case 'css':
			case 'scss':
			case 'less':
				return new CssWorker();
			case 'html':
			case 'handlebars':
			case 'razor':
				return new HtmlWorker();
			case 'typescript':
			case 'javascript':
				return new TsWorker();
			default:
				return new EditorWorker();
		}
	}
};

monaco.editor.create(document.getElementById('container'), {
	value: "function hello() {\n\talert('Hello world!');\n}",
	language: 'javascript'
});
