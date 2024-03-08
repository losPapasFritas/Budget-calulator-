import Chart from './node_modules/chart.js/auto'

(async function() {

    const data = {
        labels: [
          'Loans',
          'Housing and Insurance',
          'Utilities',
          `Transportation`,
          `Food`,
          `Clothing`,
          `Media`,
          `Entertainment`,
          `Savings`
        ],
        datasets: [{
          label: ' Spending Pie Chart',
          data: [10, 10, 30,10,10,10,10,10,10],
          backgroundColor: [
            '#FF0000',
            '#FFA800',
            '#FAFF00',
            `#33FF00`,
            `#32C000`,
            `#24FCFC`,
            `#040EFF`,
            `#FA00FF`,
            `#AD00FF`
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
 