import Chart from './node_modules/chart.js/auto'

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
      label: 'Spending Pie Chart',
      data: [10, 10, 30, 10, 10, 10, 10, 10, 10],
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

const chart = new Chart(
  document.getElementById('chart'),
  {
    type: 'doughnut',
    data: data
  }
);
function updateChart() {
  chart.data.datasets[0].data[0] = parseFloat(document.getElementById(`loans`).value);
  chart.data.datasets[0].data[1] = parseFloat(document.getElementById(`housing`).value);
  chart.data.datasets[0].data[2] = parseFloat(document.getElementById(`utilities`).value);
  chart.data.datasets[0].data[3] = parseFloat(document.getElementById(`transportation`).value);
  chart.data.datasets[0].data[4] = parseFloat(document.getElementById(`food`).value);
  chart.data.datasets[0].data[5] = parseFloat(document.getElementById(`clothing`).value);
  chart.data.datasets[0].data[6] = parseFloat(document.getElementById(`media`).value);
  chart.data.datasets[0].data[7] = parseFloat(document.getElementById(`entertainment`).value);
  chart.data.datasets[0].data[8] = parseFloat(document.getElementById(`savings`).value);
  chart.update();
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById(`loans`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`housing`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`utilities`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`transportation`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`food`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`clothing`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`media`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`entertainment`).addEventListener(`change`, function () {
    updateChart();
  });
  document.getElementById(`savings`).addEventListener(`change`, function () {
    updateChart();
  });
});