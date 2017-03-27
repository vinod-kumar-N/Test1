phoneDetail.component('phoneDetail',{
    templateUrl: 'phoneDetail/phone-detail.html',
    controller: ['$http','$routeParams',
        function PhoneDetailController($http,$routeParams){
            var self =  this;
            $http.get('phones/'+ $routeParams.phoneId + '.json').then(function(response){
                self.phone = response.data;
            })
        }
    ]
})