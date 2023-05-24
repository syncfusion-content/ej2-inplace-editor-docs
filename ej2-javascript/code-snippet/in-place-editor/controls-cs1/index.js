ej.base.enableRipple(true);

var frameWorkList = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];

var dateObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Date',
    mode: 'Inline',
    model: {
        placeholder: 'Select date'
    },
    value: new Date('11/23/2018')
});
dateObj.appendTo('#date');

var dateTimeObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'DateTime',
    mode: 'Inline',
    model: {
        placeholder: 'Select date'
    },
    value: new Date('11/23/2018 12:30 PM')
});
dateTimeObj.appendTo('#dateTime');

var dropDownObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'DropDownList',
    mode: 'Inline',
    value: 'Android',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
dropDownObj.appendTo('#dropDowns');

var maskObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Mask',
    mode: 'Inline',
    value: '123-345-678',
    model: {
        mask: '000-000-000'
    }
});
maskObj.appendTo('#masked');

var numericObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Numeric',
    mode: 'Inline',
    value: 10,
    model: {
        placeholder: 'Enter number'
    }
});
numericObj.appendTo('#numeric');

var textObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Text',
    value: 'Andrew',
    mode: 'Inline',
    model: {
        placeholder: 'Enter some text'
    }
});
textObj.appendTo('#textbox');

var atcObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'AutoComplete',
    value: 'Android',
    mode: 'Inline',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
atcObj.appendTo('#autoComplete');

var colorObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Color',
    mode: 'Inline',
    value: '#81aefd'
});
colorObj.appendTo('#color');

var comboBoxObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'ComboBox',
    mode: 'Inline',
    value: 'Android',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
comboBoxObj.appendTo('#comboBox');

var dateRangeObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'DateRange',
    mode: 'Inline',
    value: [new Date('11/12/2018'), new Date('11/15/2018')],
    model: {
        placeholder: 'Select date'
    }
});
dateRangeObj.appendTo('#dateRange');

var multiSelectObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'MultiSelect',
    mode: 'Inline',
    value: 'Android',
    model: {
        dataSource: frameWorkList,
        placeholder: 'Select frameworks'
    }
});
multiSelectObj.appendTo('#multiSelect');

var rteObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'RTE',
    mode: 'Inline',
    value: 'Enter your content here',
    model: {
        placeholder: 'Enter your content here'
    }
});
rteObj.appendTo('#rte');

var sliderObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Slider',
    mode: 'Inline',
    value: 20
});
sliderObj.appendTo('#slider');

var timeObj = new ej.inplaceeditor.InPlaceEditor({
    type: 'Time',
    mode: 'Inline',
    model: {
        placeholder: 'Select date'
    },
    value: new Date('11/23/2018')
});
timeObj.appendTo('#time');

