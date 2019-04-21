//#region Slider
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 0, 1000 ],
      slide: function( event, ui ) {
        $( "#amountRange" ).val( "€" + ui.values[ 0 ] + " - €" + ui.values[ 1 ] );
      }
    });
    $( "#amountRange" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ) +
      " - €" + $( "#slider-range" ).slider( "values", 1 ) );
  });
  //#endregion