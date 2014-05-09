// First Chart Example - Area Line Chart

Morris.Area({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-area',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2014-03-01', average_speed: 44 },
	{ d: '2014-03-02', average_speed: 61},
	{ d: '2014-03-03', average_speed: 44 },
	{ d: '2014-03-04', average_speed: 35 },
	{ d: '2014-03-05', average_speed: 43 },
	{ d: '2014-03-06', average_speed: 29 },
	{ d: '2014-03-07', average_speed: 33 },
	{ d: '2014-03-08', average_speed: 34 },
	{ d: '2014-03-09', average_speed: 55 },
	{ d: '2014-03-03', average_speed: 12 },
	{ d: '2014-03-11', average_speed: 34 },
	{ d: '2014-03-12', average_speed: 22 },
	{ d: '2014-03-13', average_speed: 45 },
	{ d: '2014-03-14', average_speed: 31 },
	{ d: '2014-03-15', average_speed: 45 },
	{ d: '2014-03-16', average_speed: 15 },
	{ d: '2014-03-17', average_speed: 15 },
	{ d: '2014-03-18', average_speed: 66 },
	{ d: '2014-03-19', average_speed: 46 },
	{ d: '2014-03-20', average_speed: 29 },
	{ d: '2014-03-21', average_speed: 19 },
	{ d: '2014-03-22', average_speed: 16 },
	{ d: '2014-03-23', average_speed: 11 },
	{ d: '2014-03-24', average_speed: 13 },
	{ d: '2014-03-25', average_speed: 83 },
	{ d: '2014-03-26', average_speed: 48 },
	{ d: '2014-03-27', average_speed: 23 },
	{ d: '2014-03-28', average_speed: 39 },
	{ d: '2014-03-29', average_speed: 42 },
	{ d: '2014-03-30', average_speed: 12 },
	{ d: '2014-03-31', average_speed: 82 },
  ],
  // The name of the data record attribute that contains x-visitss.
  xkey: 'd',
  // A list of names of data record attributes that contain y-visitss.
  ykeys: ['average_speed'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Average_Speed'],
  // Disables line smoothing
  smooth: false,
});

Morris.Donut({
  element: 'morris-chart-donut',
  data: [
    {label: "Referral", value: 42.7},
    {label: "Direct", value: 8.3},
    {label: "Social", value: 12.8},
    {label: "Organic", value: 36.2}
  ],
  formatter: function (y) { return y + "%" ;}
});

Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'morris-chart-line',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
	{ d: '2014-03-01', average_speed: 44 },
	{ d: '2014-03-02', average_speed: 61},
	{ d: '2014-03-03', average_speed: 44 },
	{ d: '2014-03-04', average_speed: 35 },
	{ d: '2014-03-05', average_speed: 43 },
	{ d: '2014-03-06', average_speed: 29 },
	{ d: '2014-03-07', average_speed: 33 },
	{ d: '2014-03-08', average_speed: 34 },
	{ d: '2014-03-09', average_speed: 55 },
	{ d: '2014-03-10', average_speed: 12 },
	{ d: '2014-03-11', average_speed: 34 },
	{ d: '2014-03-12', average_speed: 22 },
	{ d: '2014-03-13', average_speed: 45 },
	{ d: '2014-03-14', average_speed: 31 },
	{ d: '2014-03-15', average_speed: 45 },
	{ d: '2014-03-16', average_speed: 15 },
	{ d: '2014-03-17', average_speed: 15 },
	{ d: '2014-03-18', average_speed: 66 },
	{ d: '2014-03-19', average_speed: 46 },
	{ d: '2014-03-20', average_speed: 29 },
	{ d: '2014-03-21', average_speed: 19 },
	{ d: '2014-03-22', average_speed: 16 },
	{ d: '2014-03-23', average_speed: 11 },
	{ d: '2014-03-24', average_speed: 13 },
	{ d: '2014-03-25', average_speed: 83 },
	{ d: '2014-03-26', average_speed: 48 },
	{ d: '2014-03-27', average_speed: 23 },
	{ d: '2014-03-28', average_speed: 39 },
	{ d: '2014-03-29', average_speed: 42 },
	{ d: '2014-03-30', average_speed: 12 },
	{ d: '2014-03-31', average_speed: 82 },
  ],
  // The name of the data record attribute that contains x-average_speeds.
  xkey: 'd',
  // A list of names of data record attributes that contain y-average_speeds.
  ykeys: ['average_speed'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Average_Speed'],
  // Disables line smoothing
  smooth: false,
});

Morris.Bar ({
  element: 'morris-chart-bar',
  data: [
	{device: 'iPhone', geekbench: 136},
	{device: 'iPhone 3G', geekbench: 137},
	{device: 'iPhone 3GS', geekbench: 275},
	{device: 'iPhone 4', geekbench: 380},
	{device: 'iPhone 4S', geekbench: 655},
	{device: 'iPhone 5', geekbench: 1571}
  ],
  xkey: 'device',
  ykeys: ['geekbench'],
  labels: ['Geekbench'],
  barRatio: 0.4,
  xLabelAngle: 35,
  hideHover: 'auto'
});

