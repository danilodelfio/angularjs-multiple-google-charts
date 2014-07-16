/* Controllers */
var ehr= angular.module('app.controllers', ['ui.bootstrap', 'googlechart']);

// create the controller and inject Angular's $scope
	

    ehr.controller('mainController', function($scope, chartService, userService) {
        $scope.graphs = [];
        var chart1 = {};
		$scope.user = userService.getUser();
        $scope.chartOptions = angular.copy(chartService.getChartOptions());
        
        
        chart1.displayed = false;        
        chart1.data = chartService.getChartData();
        chart1.options = $scope.chartOptions;

        var formatCollection = [
            {
                name: "color",
                format: [
                    {
                        columnNum: 4,
                        formats: [
                            {
                                from: 0,
                                to: 3,
                                color: "white",
                                bgcolor: "red"
                            },
                            {
                                from: 3,
                                to: 5,
                                color: "white",
                                fromBgColor: "red",
                                toBgColor: "blue"
                            },
                            {
                                from: 6,
                                to: null,
                                color: "black",
                                bgcolor: "#33ff33"
                            }
                        ]
                    }
                ]
            },
            {
                name: "arrow",
                checked: false,
                format: [
                    {
                        columnNum: 1,
                        base: 19
                    }
                ]
            },
            {
                name: "date",
                format: [
                    {
                        columnNum: 5,
                        formatType: 'long'
                    }
                ]
            },
            {
                name: "number",
                format: [
                    {
                        columnNum: 4,
                        prefix: '$'
                    }
                ]
            },
            {
                name: "bar",
                format: [
                    {
                        columnNum: 1,
                        width: 100
                    }
                ]
            }
        ]

        chart1.formatters = {};
        $scope.chart = chart1;
        
        $scope.cssStyle = "min-height: 250px; width:100%;";

        $scope.chartSelectionChange = function (type) {
            if(type != $scope.chart.type) {
                $scope.currentChart = angular.copy($scope.chart);
                $scope.currentChart.type = type;      
                $scope.chart.type = type;
                if (($scope.currentChart.type === 'Table' && $scope.currentChart.data.cols.length === 6 && $scope.currentChart.options.tooltip.isHtml === true) ||
                    ($scope.currentChart.type != 'Table' && $scope.currentChart.data.cols.length === 6 && $scope.currentChart.options.tooltip.isHtml === false)) {
                    $scope.currentChart.data.cols.pop();
                    delete $scope.currentChart.data.rows[0].c[5];
                    delete $scope.currentChart.data.rows[1].c[5];
                    delete $scope.currentChart.data.rows[2].c[5];
                }


                if ($scope.currentChart.type === 'Table') {
                    $scope.currentChart.data.cols.push({id: "data-id", label: "Date", type: "date"});
                    $scope.currentChart.data.rows[0].c[5] = {v: "Date(2013,01,05)"};
                    $scope.currentChart.data.rows[1].c[5] = {v: "Date(2013,02,05)"};
                    $scope.currentChart.data.rows[2].c[5] = {v: "Date(2013,03,05)"};
                }

                if ($scope.currentChart.type === 'PieChart') {
                    $scope.currentChart.options.is3D = true;
                }
                $scope.graphs.push($scope.currentChart);                
            }

            
            

        }
        
        
        

        $scope.formatCollection = formatCollection;
        $scope.toggleFormat = function (format) {
            $scope.chart.formatters[format.name] = format.format;
        };

        $scope.chartReady = function () {
            fixGoogleChartsBarsBootstrap();
        }

        function fixGoogleChartsBarsBootstrap() {
            // Google charts uses <img height="12px">, which is incompatible with Twitter
            // * bootstrap in responsive mode, which inserts a css rule for: img { height: auto; }.
            // *
            // * The fix is to use inline style width attributes, ie <img style="height: 12px;">.
            // * BUT we can't change the way Google Charts renders its bars. Nor can we change
            // * the Twitter bootstrap CSS and remain future proof.
            // *
            // * Instead, this function can be called after a Google charts render to "fix" the
            // * issue by setting the style attributes dynamically.

            $(".google-visualization-table-table img[width]").each(function (index, img) {
                $(img).css("width", $(img).attr("width")).css("height", $(img).attr("height"));
            });
        };
        
	});
