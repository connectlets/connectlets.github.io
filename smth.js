var X = [1];
var Y = [1];
var chart = null;



function createChart(X, Y){
	chart.data.labels = X;
	chart.data.datasets[0].data = Y;
	chart.update();
}

function recreateGraph(e){
	var lambda = e.value / 10;

	document.getElementById("lValue").innerHTML = lambda;

	var Ns = [0.1];
	var Xs = [1];
	for(var i = 0; i < 19; i++){
		Xs.push(i+2);
		var last = Ns[Ns.length-1];
		Ns.push(lambda * last * (1 - last));
	}
	createChart(Xs, Ns);
}

document.addEventListener("DOMContentLoaded", function(event) { 
	const xValues = [50,60,70,80,90,100,110,120,130,140,150];
	const yValues = [7,8,8,9,9,9,10,11,14,14,15];

	chart = new Chart("myChart", {
	  type: "line",
	  data: {
	    labels: X,
	    datasets: [{
	      backgroundColor:"rgba(1,1,1,0.0)",
	      borderColor: "#e41ba0",
	      data: Y,
	      label: 'Population vs Time'
	    }]
	  },
	  options:{
	  	 scales: {
		    yAxes: [{
		      scaleLabel: {
		        display: true,
		        labelString: 'Population'
		      }
		    }],
		    xAxes: [{
		      scaleLabel: {
		        display: true,
		        labelString: 'Time (in years)'
		      }
		    }]
		  }    
	  }
	});



	createChart(xValues, yValues);
	
});

