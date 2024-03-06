import Chart from './node_modules/chart.js/auto'

(async function() {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [100, 100, 301],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      
    new Chart(
        document.getElementById('chart'),
        {
          type: 'doughnut',
          data: data
        }
      );


      

})();
 