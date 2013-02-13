asyncTest('Wheel', function() {
    var eventProps = ["deltaX", "deltaY", "deltaZ", "deltaMode"],
    wheelTop, wheelBottom, wheelOff;


    $('#mouse-top').on('wheel', function(event) {
        wheelTop = event;
        logProp(wheelTop);
        $('#mouse-off').trigger('wheel');
        $(this).remove();
    });

    $('#mouse-off').on('wheel', function(e){
        alert('Wheel!');
        wheelOff = e;
    }).off('wheel');

    $('#mouse-bottom').wheel(function(event) {
        var $this = $(this);
        wheelBottom = event;
        logProp(wheelBottom);

        $this.remove();

        ok(wheelTop, 'wheel top exist');
        ok(wheelTop.deltaY < 0, 'wheel top right direction');
        strictEqual(wheelTop.deltaX, 0, 'deltaY is 0');
        strictEqual(wheelTop.deltaZ, 0, 'deltaZ is 0');
        strictEqual(wheelTop.deltaMode, 1, 'deltaMode is 0');


        ok(wheelBottom, 'wheel top exist');
        ok(wheelBottom.deltaY > 0, 'wheel top right direction');
        strictEqual(wheelBottom.deltaX, 0, 'deltaY is 0');
        strictEqual(wheelBottom.deltaZ, 0, 'deltaZ is 0');
        strictEqual(wheelBottom.deltaMode, 1, 'deltaMode is 0');

        strictEqual(wheelOff, undefined, 'remove event');

        start();
    });



    function logProp(event) {
        $.each(eventProps, function(i, prop) {
           console.log(event[prop]);
        });
    }


});
