import $ from 'jquery';

// $('ul li')
// $('ul').children().text('Hey ;)');

document.querySelector('button').addEventListener('click', () => {
    // let attr = $('input').attr('type');
    $('input').attr({
        id: 'foo',
        class: 'bar',
        'data-fignja': 1111
    });


    /*console.log(
        $('input').val('asdasd')
    );*/
});



/*$('ul li').html (`
    <h1>Title</h1>
    <p>lorem</p>
    <p>ipsum</p>
    <p>dolor</p>
    <h2>dolor</h2>
`);*/

/*$('ul li').text(function(index, text){
    return `Hello world ${index}`;
});*/

















/*let container = $('#container');
let section = $('section.bar');*/
// let firstChildInsideSection = $('#container p:first-child');
// let firstChildInsideSection = $('#container').children().first();
/*let firstChildInsideSection = $('#container').children().eq(0);
console.log(
    firstChildInsideSection.nextAll('p')
);

$('ul li').slice(3, 8).css('color', 'yellow');*/


/*
console.log(
    container.children('.bar').css('color', 'red')
);*/
