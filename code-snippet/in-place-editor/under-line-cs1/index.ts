

import { InPlaceEditor, ActionBlur } from '@syncfusion/ej2-inplace-editor';

let defaultObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
defaultObj.appendTo('#default');

let inlineObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
inlineObj.appendTo('#inline');


