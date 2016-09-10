/*!
 * JQuery Radar plus Example v0.1 (http://www.tazimehdi.com)
 * Copyright Mehdi TAZI 2014
 */
$(function() {
	
	//OnLoad
	$(document).ready(function() {
	
				$('.skillsPieChart').radarChart({
				size: [480, 400],
				step: 1,
				fixedMaxValue:10,
				showAxisLabels: true
				});
	
    });

});



