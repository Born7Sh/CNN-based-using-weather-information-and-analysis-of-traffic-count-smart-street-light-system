am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    chart = am4core.create("chartdiv", am4charts.XYChart);

    //

    // Increase contrast by taking evey second color
    chart.colors.step = 2;

    // Add data
    chart.data = generateChartData(true, true, true);

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    createAxisAndSeries("visits", "통행량", false, "circle");
    createAxisAndSeries("cars", "차량", true, "triangle");
    createAxisAndSeries("trucks", "트럭", true, "rectangle");

    // Add legend
    chart.legend = new am4charts.Legend();

    // Add cursor
    chart.cursor = new am4charts.XYCursor();



}); // end am4core.ready()

function refreshchart() {

        // Themes begin
    am4core.useTheme(am4themes_frozen);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    chart = am4core.create("chartdiv", am4charts.XYChart);

    //

    // Increase contrast by taking evey second color
    chart.colors.step = 2;

    var cars = document.getElementById('cars').checked;
    var trucks = document.getElementById('trucks').checked;
    var total = document.getElementById('total').checked;

    chart.data = generateChartData(cars, trucks, total);


    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 20;
    if(total==true) createAxisAndSeries("visits", "통행량", false, "circle");
    if(cars==true) createAxisAndSeries("cars", "차량", true, "triangle");
    if(trucks==true) createAxisAndSeries("trucks", "트럭", true, "rectangle");

    // Add legend
    chart.legend = new am4charts.Legend();

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
}

// generate some random data, quite different range
function generateChartData(car, truck, total) {
    var chartData = [];
    var start = document.getElementById('date1');   // 시작 날짜를 뽑아옴
    var starttime = start.value;
    var firstDate = new Date(starttime);
    firstDate.setHours(0, 0, 0, 0);

    var cars = 30;
    var trucks = 10;
    var visits;

    var flag = car*4+truck*2+total;

    switch(flag){
        case 7: // 차량, 트럭, 통행량
            for (var i = 0; i < 15; i++) {      // 반복한 횟수가 곧 가로축 갯수
                // we create date objects here. In your data, you can have date strings
                // and then set format of your dates using chart.dataDateFormat property,
                // however when possible, use date objects, as this will speed up chart rendering.
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    visits: visits,
                    trucks: trucks,
                    cars: cars
                });
            }
            break;
        case 6: // 차량, 트럭
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    trucks: trucks,
                    cars: cars
                });
            }
            break;
        case 5: // 차량, 통행량
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    visits: visits,
                    cars: cars
                });
            }
            break;
        case 4: // 차량
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    cars: cars
                });
            }
            break;
        case 3: // 트럭, 통행량
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    visits: visits,
                    trucks: trucks
                });
            }
            break;
        case 2: // 트럭
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    trucks: trucks
                });
            }
            break;
        case 1: // 통행량
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate,
                    visits: visits
                });
            }
            break;
        case 0: // 아무것도 체크 안함
            for (var i = 0; i < 15; i++) {
                var newDate = new Date(firstDate);
                newDate.setDate(newDate.getDate() + i);
        
                cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
                trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
                visits = cars + trucks;
        
                chartData.push({
                    date: newDate
                });
            }
            break;
        default:
            alert("Flag Error");
    }


/*    for (var i = 0; i < 15; i++) {      // 반복한 횟수가 곧 가로축 갯수
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        cars += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 2);
        trucks += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
        visits = cars + trucks;

        chartData.push({
            date: newDate,
            visits: visits,
            trucks: trucks,
            cars: cars
        });
    }

*/

    return chartData;
}

// Create series
function createAxisAndSeries(field, name, opposite, bullet) {
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    if (chart.yAxes.indexOf(valueAxis) != 0) {
        valueAxis.syncWithAxis = chart.yAxes.getIndex(0);
    }

    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = field;
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.yAxis = valueAxis;
    series.name = name;
    series.tooltipText = "{name}: [bold]{valueY}[/]";       // 마우스 올렸을때 나오는 정보
    series.tensionX = 0.8;
    series.showOnInit = true;

    var interfaceColors = new am4core.InterfaceColorSet();

    switch (bullet) {
        case "triangle":
            var bullet = series.bullets.push(new am4charts.Bullet());
            bullet.width = 12;
            bullet.height = 12;
            bullet.horizontalCenter = "middle";
            bullet.verticalCenter = "middle";

            var triangle = bullet.createChild(am4core.Triangle);
            triangle.stroke = interfaceColors.getFor("background");
            triangle.strokeWidth = 2;
            triangle.direction = "top";
            triangle.width = 12;
            triangle.height = 12;
            break;
        case "rectangle":
            var bullet = series.bullets.push(new am4charts.Bullet());
            bullet.width = 10;
            bullet.height = 10;
            bullet.horizontalCenter = "middle";
            bullet.verticalCenter = "middle";

            var rectangle = bullet.createChild(am4core.Rectangle);
            rectangle.stroke = interfaceColors.getFor("background");
            rectangle.strokeWidth = 2;
            rectangle.width = 10;
            rectangle.height = 10;
            break;
        default:
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = interfaceColors.getFor("background");
            bullet.circle.strokeWidth = 2;
            break;
    }

    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = series.stroke;
    valueAxis.renderer.labels.template.fill = series.stroke;
    valueAxis.renderer.opposite = opposite;
}