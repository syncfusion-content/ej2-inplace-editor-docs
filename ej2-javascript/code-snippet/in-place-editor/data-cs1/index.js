ej.base.enableRipple(true);

var gameList = [
    { Id: '1', Name: 'Maria Anders' },
    { Id: '2', Name: 'Ana Trujillo' },
    { Id: '3', Name: 'Antonio Moreno' },
    { Id: '4', Name: 'Thomas Hardy' },
    { Id: '5', Name: 'Chiristina Berglund' },
    { Id: '6', Name: 'Hanna Moos' }
];

//Initialize In-place Editor control
var editObj = new ej.inplaceeditor.InPlaceEditor({
    mode: 'Inline',
    type: 'DropDownList',
    value: 'Maria Anders',
    model: {
        dataSource: gameList,
        fields: { text: 'Name' },
        placeholder: 'Select a customer'
    }
});

//Render initialized In-place Editor control
editObj.appendTo('#element');

