var myApp=angular.module('myApp',['core']);
myApp.controller('myComponentController',function myComponentController($scope)

{});

angular.module('myApp').
component('myComponent',{
  templateUrl:'mytable.html',
  controller:['$http',
  function myComponentController($http){
    var self = this;
    self.currentPage = 0;
    self.pageSize = 4;
    self.sortType = 'year';
    self.sortOrder  = true;
    $http.get('crime/crime.json').then(function(content){
      self.crime=content.data;
      self.len= Math.ceil(self.crime.length);
      self.pageCount = (Math.ceil(self.crime.length/self.pageSize));
    });
    self.buttonCount = self.pageCount;
    ///delete current object
    self.delete = function(x)
    {
      var c=self.crime.indexOf(x);
      self.crime.splice(c,1);
    }
    ///add new object
    self.add = function(year,above,below)
    {
      if((!(year === undefined) |(year == "")) && (!(above === undefined) |(above == "")) &&(!(below === undefined) |(below == "")))
       {
        self.crime.push({'year':year,'above_500':above,'under_500':below});
        alert("added successfully");
       }
    }
    ///reset page size
    self.reset = function()
    {
      //console.log(self.pageCount);
      self.pageCount = (Math.ceil(self.crime.length/self.pageSize));

      console.log(self.currentPage);
      console.log(self.pageCount);
        if(self.currentPage == self.pageCount)
        {
          self.currentPage = self.currentPage-1;
        }
    }
    self.resett = function()
    {
      //console.log(self.pageCount);
      self.pageCount = (Math.ceil(self.crime.length/self.pageSize));
      //console.log(self.currentPage);
      self.currentPage = self.pageCount - 1;
    }
    self.resetPageCount = function()
    {
    self.pageCount = (Math.ceil(self.crime.length/self.pageSize));
    console.log(self.pageCount);
    for(i in self.crime){
       console.log(self.crime[i]);
     }

    }
  }
]
});
