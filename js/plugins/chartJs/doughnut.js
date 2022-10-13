$(function () {

    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    var ctx2 = $("#doughnut-chartcanvas-2");

    //doughnut chart data
    var data1 = {
        labels: ["PNS", "TNI", "POLRI", "SATLINMAS", "TENAGA KONTRAK", "NON APARATUR"],
        datasets: [
            {
                label: "",
                data: [300, 50, 100, 124, 12, 111],
                backgroundColor: [
                    "#a3e1d4", "#dedede", "#b5b8cf", "#3373FF", "#9A33FF", "#FF33C7"
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

    //doughnut chart data
    var data2 = {
        labels: ["GEMPA BUMI", "TSUNAMI", "BANJIR", "TANAH LONGSOR", "LETUSAN GUNUNG API", "GELOMBANG LAUT EKSTRIM", "ANGIN TOPAN", "KEKERINGAN", "KEBAKARAN HUTAN DAN LAHAN", "EPIDEMI DAN WABAH"],
        datasets: [
            {
                label: "",
                data: [20, 35, 40, 60, 50, 20, 35, 40, 60, 50],
                backgroundColor: [
                    "#FAEBD7",
                    "#DCDCDC",
                    "#E9967A",
                    "#F5DEB3",
                    "#9ACD32", "#a3e1d4", "#dedede", "#b5b8cf", "#3373FF", "#9A33FF"
                ],
                borderColor: [
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21",
                    "#E9DAC6",
                    "#CBCBCB",
                    "#D88569",
                    "#E4CDA2",
                    "#89BC21"
                ],
                borderWidth: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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
            position: "top",
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
});