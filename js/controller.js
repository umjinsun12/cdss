app.controller("medicalCtrl", function($scope, $firebaseObject, $firebaseArray, $localstorage, $window) {
  
  var ref = firebase.database().ref();
  $scope.datas = $firebaseArray(ref);
 
  console.log($scope.datas);


  $scope.go_detail = function(item){
  	$localstorage.setObject("item",item);
  	//console.log($localstorage.get("item"));
  	$window.location.href = "./detail.html";
  }


  $scope.go_jin = function(depart){
  	if($scope.datas[0] != null){
  		$localstorage.set("depart",depart);
  		$window.location.href = "./jin_search.html";
  	}

  }

  $scope.passdata = $localstorage.getObject("item");

  
  if($scope.passdata.Evidence_Table == 'I')
  	$scope.passdata.Evidence_Table = 1;
  else if($scope.passdata.Evidence_Table == 'II')
  	$scope.passdata.Evidence_Table = 2;
  else if($scope.passdata.Evidence_Table == 'III')
  	$scope.passdata.Evidence_Table = 3;
  else if($scope.passdata.Evidence_Table == 'IV')
  	$scope.passdata.Evidence_Table = 4;

  console.log($scope.passdata.Evidence_Table);


  $scope.depart = $localstorage.get("depart");
  $scope.departlist = [];

  $scope.datas.$loaded().then(function(){
  	for(var i= 0 ; i < $scope.datas.length ; i++){
  		if($scope.datas[i].Department == $scope.depart){
  			$scope.departlist.push($scope.datas[i]);
  		}
  	}
  	console.log($scope.departlist);
  });



});