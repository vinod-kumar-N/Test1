schoolApp.service('getUserName', function($rootScope){
    var uidname = {};
    uidname.sharedmsg = 'vinod';
    alert('This is from service '+ uidname);
    var counter = 1;
    uidname.addUserNameData = function(newuname){
        counter++;
        alert(counter);
        this.sharedmsg = newuname;
        alert("The name is "+ this.sharedmsg);
        this.getUserNameData();
    };
    uidname.getUserNameData = function(){
        alert('This is in get Part'+counter);
        $rootScope.$broadcast('handlePublish');
    };
    return uidname;
})