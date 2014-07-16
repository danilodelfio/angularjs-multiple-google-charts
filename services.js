
/* Services */

var appServices= angular.module('app.services', []);

appServices.service('userService', function(){
  var user = { name:'Danilo', surname:'Del Fio', dateOfBirth:'29/03/1973'};
  this.getUser = function(){
    return user;
  }
});


appServices.service('chartService', function(){
    
  
  var chartOptions = {
        title: "Graph Title",
        is3D: false,
        isStacked : true,
        fill : 20,
        displayExactValues : true,
        horizontalTitle: "Date",
        vertical: {
            title: "Vertical Title", 
            gridlines: {"count": 10}
        }
    };
    
    var chartData = {"cols": [
        {id: "month", label: "Month", type: "string"},
        {id: "laptop-id", label: "Laptop", type: "number"},
        {id: "desktop-id", label: "Desktop", type: "number"},
        {id: "server-id", label: "Server", type: "number"},
        {id: "cost-id", label: "Shipping", type: "number"}
    ], "rows": [
        {c: [
            {v: "January"},
            {v: 19, f: "42 items"},
            {v: 12, f: "Ony 12 items"},
            {v: 7, f: "7 servers"},
            {v: 4}
        ]},
        {c: [
            {v: "February"},
            {v: 13},
            {v: 1, f: "1 unit (Out of stock this month)"},
            {v: 12},
            {v: 2}
        ]},
        {c: [
            {v: "March"},
            {v: 24},
            {v: 5},
            {v: 11},
            {v: 6}

        ]}
    ]};
    
    this.getChartOptions = function(){
        return chartOptions;
    }
    this.getChartData = function(){
        return chartData;
    }
});