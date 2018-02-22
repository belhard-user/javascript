import $ from 'jquery';



$('ul').on('click', 'li', function (e) {
    alert($(this).text());
});


$('form:first').on('submit', function(e){
    e.preventDefault();
    let input = $(this).find('input');

    $('<li>', {
        text: input.val()
    }).appendTo('ul:first');

    input.val('');
});

document.querySelector('button').addEventListener('click', () => {
    // let str = 'Hey';
    // let className = 'foo';
    //
    // let li = $('<li>', {
    //     html: '<strong>some text</strong>',
    //     class: 'asdadsasd',
    //     id: 'asdasd'
    // });

    //li.css('color', 'gold');

    // li.insertAfter('li');
    // $('li').eq(3).after(li);

    // li.prependTo('ul:first');
    //$('ul:first').prepend(li);

    // li.appendTo('ul:first');
    // $('ul').append(li);
});