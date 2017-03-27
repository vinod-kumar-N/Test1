phonecatApp.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider) {
    $routeProvider
    .when("/phones",{
        template : "<phone-list></phone-list>"
    })
    .when("/phones/:phoneId",{
        template: '<phone-detail></phone-detail>'
    })
}])