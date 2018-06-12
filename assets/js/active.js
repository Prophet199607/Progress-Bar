/* ---------------------------------------------
 common scripts
 --------------------------------------------- */
(function($) {
    'use strict'; // use strict to start

    jQuery(document).ready(function($) {
	     
        //single progress bar
        
         $('#cirlc-1').circleProgress({
            value: 0.25,
            size: 150,
            thickness:5,
            fill: {
              gradient: ["red", "orange"]
            }

          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.circle-inner').html(Math.round(25 * progress) + '<i>%</i>');
          });

        //single progress bar
        
         $('#cirlc-2').circleProgress({
            value: 0.55,
            size: 150,            
            thickness:5,
            fill: {
              gradient: ["brown", "red"]
            }

          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.circle-inner').html(Math.round(55 * progress) + '<i>%</i>');
          });

        //single progress bar
        
         $('#cirlc-3').circleProgress({
            value: 0.9,
            size: 150,                      
            thickness:5,
            fill: {
              gradient: ["purple", "pink"]
            }
            
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.circle-inner').html(Math.round(90 * progress) + '<i>%</i>');
          });

        //single progress bar

         $('#cirlc-4').circleProgress({
            value: 0.85,
            size: 150,            
            thickness:5,
            fill: {
              gradient: ["blue", "lightblue"]
            }
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.circle-inner').html(Math.round(85 * progress) + '<i>%</i>');
          });

          //single progress bar

         $('#cirlc-5').circleProgress({
            value: 0.45,
            size: 150,            
            thickness:5,
            fill: {
              gradient: ["red", "orange", "yellow"]
            }
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.circle-inner').html(Math.round(45 * progress) + '<i>%</i>');
          });

          //single progress bar

         $('#cirlc-6').circleProgress({
            value: 0.7,
            size: 150,            
            thickness:5,
            fill: {
              gradient: ["yellow", "green", "lightgreen"]
            }
          }).on('circle-animation-progress', function(event, progress) {
                $(this).find('.circle-inner').html(Math.round(70 * progress) + '<i>%</i>');
          });

        
    });

	

    jQuery(window).load(function() {
		

    });




}(jQuery));