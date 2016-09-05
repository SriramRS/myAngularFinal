var myApp=angular.module('myApp',['core']);
 function myComponentController($http,$scope){
   var self = this;
     //$scope.one = 0;
     $scope.currentPage = 0;
     $scope.pageSize = 4;
     $scope.sortType = 'year';
     $scope.sortOrder  = false;
     $http.get('crime/crime.json').then(function(content){
     $scope.crime=content.data;
     $scope.len= Math.ceil($scope.crime.length);
     $scope.pageCount = (Math.ceil($scope.crime.length/$scope.pageSize));
});

$scope.buttonCount = $scope.pageCount;
///delete current object
$scope.delete = function(x)
{
  var c=$scope.crime.indexOf(x);
  $scope.crime.splice(c,1);
}
///add new object
$scope.add = function(year,above,below)
{
  if((!(year === undefined) |(year == "")) && (!(above === undefined) |(above == "")) &&(!(below === undefined) |(below == "")))
   {
    $scope.crime.push({'year':year,'above_500':above,'under_500':below});
    alert("added successfully");
   }
}
///reset page size
$scope.reset = function()
{
  console.log($scope.one);
  //console.log($scope.pageCount);
  $scope.pageCount = (Math.ceil(($scope.len - 1)/$scope.pageSize));

  //console.log($scope.currentPage);
  //console.log($scope.pageCount);
    if($scope.currentPage == $scope.pageCount)
    {
      $scope.currentPage = $scope.currentPage-1;
    }
}
$scope.resett = function()
{
  //console.log($scope.pageCount);
  console.log($scope.one);
  $scope.pageCount = (Math.ceil(($scope.len + 1)/$scope.pageSize));
  //console.log($scope.currentPage);
  $scope.currentPage = $scope.pageCount - 1;
}
$scope.resetPage = function()
{
  //console.log("from main one"+$scope.one);
//$scope.len = Math.ceil($scope.len/)
  $scope.pageCount = (Math.ceil($scope.len/$scope.pageSize));
}
$scope.curPage = function(i)
{
  //console.log("hai"+$scope.currentPage);
  $scope.currentPage = i - 1;
}

}//end of controller function

angular.module('myApp').
component('myComponent',{
  templateUrl:'mytable.html',
  controller: myComponentController
});

/*
angular.
  module('myApp').filter('datafilter', function() {
    return function(input,param,value) {
      if(!(param == "undefined" || value == "undefined"))
      {
        if(param == "year")
          {
            value = +value;
            for(o in input)
            {

              input[o].year =+ input[o].year;
              if(input[o].year < value)
              {
                //console.log(o);
                input.splice(o,1);
                //new_arr.push(input[o]);
              }
            }
          return input;
          }

          if(param == "above_500")
            {
              value = +value;
              for(o in input)
              {
                input[o].above_500 =+ input[o].above_500;
                if(input[o].above_500 < value)
                {
                    input.splice(o,1);
                }
              }
            //  console.log(new_arr);
            return input;
            }

            if(param == "under_500")
              {
                value = +value;
                for(o in input)
                {
                  input[o].under_500 =+ input[o].under_500;
                  if(input[o].under_500 < value)
                  {
                      input.splice(o,1);
                  }
                }
              //  console.log(new_arr);
              return input;
              }


      }
      else{
        return input;
      }

    //  return input;
    }
});
*/
