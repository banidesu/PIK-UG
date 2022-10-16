$(function(){

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    var ctx2 = $("#doughnut-chartcanvas-2");

    var ctx3 = $("#doughnut-chartcanvas-3");

    //doughnut chart data
    var data1 = {
        labels: ["PNS: 300","TNI: 50","POLRI: 100","SATLINMAS: 124","TENAGA KONTRAK: 12","NON APARATUR: 111"],
        datasets: [
            {
                label: "",
                data: [300,50,100,124,12,111],
                backgroundColor: [
                    "#a3e1d4","#dedede","#b5b8cf","#3373FF","#9A33FF","#FF33C7"
                ],
                borderColor: [
                    "#a3e1d4","#dedede","#b5b8cf","#3373FF","#9A33FF","#FF33C7"
                ],
                borderWidth: [1, 1, 1, 1, 1, 1]
            }
        ]
    };

    //doughnut chart data
    var data2 = {
        labels: ["Jakarta Timur: 20", "Jakarta Selatan: 35", "Jakarta Barat: 40", "Jakarta Utara: 60", "Jakarta Pusat: 50", "Kepulauan Seribu: 50"],
        datasets: [
            {
                label: "",
                data: [20, 35, 40, 60, 50, 50],
                backgroundColor: [
                    "#FAEBD7",
                    "#DCDCDC",
                    "#E9967A",
                    "#F5DEB3",
                    "#9ACD32",
                    "#FF33C7"
                ],
                borderColor: [
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21",
                    "#E4CDA2"
                ],
                borderWidth: [1, 1, 1, 1, 1, 1]
            }
        ]
    };

    var data3 = {
        labels: ["PENYUSUNAN KAJIAN RISIKO BENCANA: 80%", "KOMUNIKASI, INFORMASI </br> DAN EDUKASI RAWAN BENCANA: 80%"],
        datasets: [
            {
                label: "",
                data: [80, 80],
                backgroundColor: [
                    "#FAEBD7",
                    "#E9967A"
                ],
                borderColor: [
                    "#E9DAC6",
                    "#CBCBCB"
                ],
                borderWidth: [1, 1]
            }
        ]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "",
            fontSize: 12,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 12
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

    //create Chart class object
    var chart2 = new Chart(ctx2, {
        type: "doughnut",
        data: data2,
        options: options
    });

    var chart3 = new Chart(ctx3, {
        type: "doughnut",
        data: data3,
        options: options
    });
});