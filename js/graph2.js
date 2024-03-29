Highcharts.chart('container2', {
    chart: {
        polar: true,
        type: 'line'
    },
    
    title: {
        text: 'Industry & Province',
        x: -80
    },
    pane: {
        size: '80%'
    },
    xAxis: {
        categories: ['Property & Construction', 'Services', 'Industrial', 'Financials', 'Resources', 'Agro & Food Industry', 'Consumer Products', 'Technology', 'Others'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },
    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0
    },
    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },
    legend: {
        align: 'right',
        verticalAlign: 'top',
        y: 70,
        layout: 'vertical'
    },
    series: [{
        data: [153,206,85,67,55,43,43,91,7],
        name: "Bangkok",
        pointPlacement: "on"
    }, {
        data: [8,7,1,0,2,1,2,7,0],
        name: "Nonthaburi",
        pointPlacement: "on"
    }, {
        data: [3,2,0,0,2,4,0,1,1],
        name: "Pathumthani",
        pointPlacement: "on"
    }, {
        data: [1,1,3,0,0,0,0,2,0],
        name: "Ayutthaya",
        pointPlacement: "on"
    }, {
        data: [0,0,0,0,0,0,1,0,0],
        name: "Chainat",
        pointPlacement: "on"
    }, {
        data: [1,0,0,0,0,0,0,0,0],
        name: "Saraburi",
        pointPlacement: "on"
    }, {
        data: [4,2,8,0,1,1,1,0,0],
        name: "Chonburi",
        pointPlacement: "on"
    }, {
        data: [2,2,4,0,1,0,1,0,0],
        name: "Rayong",
        pointPlacement: "on"
    }, {
        data: [1,0,0,0,0,0,1,0,0],
        name: "Chachoengsao",
        pointPlacement: "on"
    }, {
        data: [0,0,1,0,0,0,0,1,0],
        name: "Prachinburi",
        pointPlacement: "on"
    }, {
        data: [0,0,0,0,0,1,0,0,0],
        name: "Buriram",
        pointPlacement: "on"
    }, {
        data: [0,1,2,0,0,0,0,0,0],
        name: "KhonKaen",
        pointPlacement: "on"
    }, {
        data: [0,1,0,0,0,0,0,0,0],
        name: "Udonthani",
        pointPlacement: "on"
    }, {
        data: [0,1,0,0,0,0,0,0,0],
        name: "Roiet",
        pointPlacement: "on"
    }, {
        data: [1,1,0,0,0,1,0,0,0],
        name: "Chiangmai",
        pointPlacement: "on"
    }, {
        data: [0,0,0,0,0,0,1,0,0],
        name: "Lamphun",
        pointPlacement: "on"
    }, {
        data: [0,0,0,0,0,0,1,0,0],
        name: "Lampang",
        pointPlacement: "on"
    }, {
        data: [0,1,0,0,0,0,0,0,0],
        name: "Chiangrai",
        pointPlacement: "on"
    }, {
        data: [0,1,4,0,1,1,0,0,0],
        name: "Nakhonpathom",
        pointPlacement: "on"
    }, {
        data: [0,4,5,0,1,1,0,0,0],
        name: "Samutsakhon",
        pointPlacement: "on"
    }, {
        data: [,0,0,0,0,0,1,0,0,0],
        name: "Krabi",
        pointPlacement: "on"
    }, {
        data: [0,2,0,0,0,0,0,0,0],
        name: "Suratthani",
        pointPlacement: "on"
    }, {
        data: [0,0,0,0,0,1,0,0,0],
        name: "Chumphon",
        pointPlacement: "on"
    }, {
        data: [0,0,2,0,0,3,0,0,0],
        name: "Songkhla",
        pointPlacement: "on"
    }, {
        data: [0,1,0,0,0,0,0,0,0],
        name: "Trang",
        pointPlacement: "on"
    }, {
        data: [0,0,1,0,0,1,0,0,0],
        name: "Others",
        pointPlacement: "on"
    }]
});
[]