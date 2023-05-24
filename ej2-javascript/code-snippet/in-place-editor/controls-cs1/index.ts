


import { InPlaceEditor, AutoComplete, ColorPicker, ComboBox } from '@syncfusion/ej2-inplace-editor';
import { DateRangePicker, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-inplace-editor';

InPlaceEditor.Inject(AutoComplete, ColorPicker, ComboBox, DateRangePicker, MultiSelect, Rte, Slider, TimePicker);

let frameWorkList: string[] = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];

let dateObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Date',
    model: {
        placeholder: 'Select date'
    },
    value: new Date('11/23/2018')
});
dateObj.appendTo('#date');

let dateTimeObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'DateTime',
    model: {
        placeholder: 'Select date'
    },
    value: new Date('11/23/2018 12:30 PM')
});
dateTimeObj.appendTo('#dateTime');

let dropDownObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Android',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
dropDownObj.appendTo('#dropDowns');

let maskObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Mask',
    value: '123-345-678',
    model: {
        mask: '000-000-000'
    }
});
maskObj.appendTo('#masked');

let numericObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Numeric',
    value: 10,
    model: {
        placeholder: 'Enter number'
    }
});
numericObj.appendTo('#numeric');

let textObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Text',
    value: 'Andrew',
    model: {
        placeholder: 'Enter some text'
    }
});
textObj.appendTo('#textbox');

let atcObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'AutoComplete',
    value: 'Android',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
atcObj.appendTo('#autoComplete');

let colorObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Color',
    value: '#81aefd'
});
colorObj.appendTo('#color');

let comboBoxObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'ComboBox',
    value: 'Android',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
comboBoxObj.appendTo('#comboBox');

let dateRangeObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'DateRange',
    value: [new Date('11/12/2018'), new Date('11/15/2018')],
    model: {
        placeholder: 'Select date'
    }
});
dateRangeObj.appendTo('#dateRange');

let multiSelectObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'MultiSelect',
    value: ['Android'],
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
multiSelectObj.appendTo('#multiSelect');

let rteObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'RTE',
    value: '<p>Enter your content here</p>',
    model: {
        placeholder: 'Enter your content here'
    }
});
rteObj.appendTo('#rte');

let sliderObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Slider',
    value: 20
});
sliderObj.appendTo('#slider');

let timeObj: InPlaceEditor = new InPlaceEditor({
    mode: 'Inline',
    type: 'Time',
    model: {
        placeholder: 'Select date'
    },
    value: new Date('11/23/2018')
});
timeObj.appendTo('#time');



