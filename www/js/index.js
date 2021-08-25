function wlCommonInit(){

    //initialize app for push notification
         MFPPush.initialize (
             function(successResponse) {
                 alert("Push Notification Successfully intialized");
                 MFPPush.registerNotificationsCallback(notificationReceived);
             },
             function(failureResponse) {
                 alert("Failed to initialize");
             }
         );
 
         //Check device is Supported for push notification
         MFPPush.isPushSupported (
             function(successResponse) {
                 alert("Device is Push Supported");
             },
             function(failureResponse) {
                 alert("Failed to get push support status");
             }
         );
 
         //register app for push notification
         MFPPush.registerDevice( null,
             function(successResponse) {
                     alert("Device Successfully registered");
             },
             function(failureResponse) {
                 alert("Failed to register");
             }
         );
 
         var notificationReceived = function(message) {
             alert(JSON.stringify(message));
         };
 }