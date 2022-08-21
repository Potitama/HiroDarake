window.onload = function() {
    Particles.init({
      selector: '.background',
      sizeVariations: 90,
      color: ['#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'],
      responsive: [
        { breakpoint: 400,
            options: {
                sizeVariations: 50
            }
        }
      ]
    });
  };