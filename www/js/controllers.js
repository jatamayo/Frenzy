//****************************************************
angular.module('starter.controllers', ['ionic'])


.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopover) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    // TODO cambie `browse.html` a `login.html`. Estaba dando error.
    // Tambien comment out todo esto, parecia no estar haciendo nada.

    // $ionicModal.fromTemplateUrl('templates/login.html', {
    //   scope: $scope
    // }).then(function(modal) {
    //   $scope.modal = modal;
    // });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Removee this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })
  //**************************************************************
  //*********************  POPOVER  ******************************


.controller('PopoverCtrl', function($scope, $ionicPopover) {

  $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
    $scope.message = 'hello';
  });

})

.controller('PopoverNewCtrl', function($scope, $ionicPopover) {
    $ionicPopover.fromTemplateUrl('templates/popoverNew.html', {
      scope: $scope,
    }).then(function(popover) {
      $scope.popover = popover;
      $scope.message = 'cheers';
    });
  })
  //**************************************************************
  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [{
      title: 'Supermercado',
      icon: 'E',
      id: 'supermercado'
    }, {
      title: 'Restaurantes',
      icon: 'F',
      id: 'restaurantes'
    }, {
      title: 'Moda',
      icon: 'G',
      id: 'moda'
    }, {
      title: 'Entretenimiento',
      icon: 'H',
      id: 'entretenimiento'
    }, {
      title: 'Electrónicos',
      icon: 'I',
      id: 'electronicos'
    }, {
      title: 'Otros',
      icon: 'J',
      id: 'otros'
    }];
  })

.controller('Supermercado', function($scope) {
  $scope.playlists = [{
    title: 'La TorreL',
    id: 'supermer'
  }, {
    title: 'wallmart',
    id: 'restaurantes'
  }, {
    title: 'paiz',
    id: 'centro'
  }];
})

.controller('Supermer', function($scope) {
    $scope.playlists = [{
      title: 'La Torre 2*1',
      id: '2x1'
    }, {
      title: 'la torre -20%',
      id: '20'
    }, {
      title: 'la torre platos',
      id: 'platos'
    }];
  })
  //********************************************************
  //********************************************************


.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
})

.controller('SupermercadoCtrl', function($scope, Supermercados) {
  $scope.chats = Supermercados.all();
})

.controller('RestaurantesCtrl', function($scope, Restaurantes) {
  $scope.chats = Restaurantes.all();
})

.controller('ModaCtrl', function($scope, Moda) {
  $scope.chats = Moda.all();
})

.controller('EntretenimientoCtrl', function($scope, Entretenimiento) {
  $scope.chats = Entretenimiento.all();
})

.controller('ElectronicosCtrl', function($scope, Electronicos) {
  $scope.chats = Electronicos.all();
})

.controller('CategoryCtrl', function($scope, Categorys) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.categorys = Categorys.all();

  })
  /****************************  tamayo  *****************************************/
  .controller('PaizCtrl', function($scope, $stateParams, Paiz) {
    console.log("calling PaizCtrl");
    var favorite = new Parse.Query('Favorite');
    $scope.$on('$ionicView.enter', function() {
      $scope.chats = Paiz.get($stateParams.superId);
      $scope.popover = Paiz.all($stateParams.superId);
      $scope.heartPopover = function(id){
      /*    console.log("exitoso", HeartPopover)
          */
          //console.log(dato)
          console.log("id",id)

          favorite.find({
              success: function(results) {
                  for (x in results) {
                      //console.log(results[x].attributes.CustomerID)
                      //console.log(results[x].attributes.UserID)
                      if (results[x].attributes.UserID===IdUsuario){
                        for (c in results[x].attributes.CustomerID) {
                          // console.log(id,'id')
                           console.log(results[x].attributes.CustomerID[c],'custumer')
                          if ( id == results[x].attributes.CustomerID[c]) {
                            console.log(results[x].attributes.CustomerID[c],'lo encontro')
                            for (w in dato) {
                              console.log(dato[w].id)
                              if ($('#' + dato[w].id).css("display") != 'none') {
                                alert("show")
                                $scope.heartMenu = 'red'
                                document.getElementById(dato[w].id).style.color="red";
                                }


                            }
                          //document.getElementById(id).style.color="red";


                          }
                        }
                        console.log("find user")
                        console.log(results[x].attributes)

                      }else{

                          console.log("the user no found")
                      }
                  }


            },
            error: function(myObject, error) {
              // Error occureds
              console.log( error );
            }
          });

      }

    });



    console.log(Paiz);
  })
  /****************************  tamayo  final*****************************************/

.controller('ChatDetailCtrl', function($scope, $stateParams, Categorys) {
  $scope.chat = Categorys.get($stateParams.chatId);
})



.controller('BarraCtrl', function($scope, Barra) {
  $scope.chats = Barra.get();
})

.controller('AllFavoriteCtrl', function($scope, $stateParams, AllFavorite) {
  console.log("Called AllFavoriteCtrl");
  console.log(AllFavorite);

  //$scope.chats = AllFavorite.get($stateParams.superId);


  $scope.$on('$ionicView.enter', function() {
    $scope.chats = AllFavorite.all();
  });

  $scope.getAllFavorites = function() {

  };

})


.controller('AllPromotionCtrl', function($scope, $stateParams, AllPromotion) {
  //console.log("calling PaizCtrl");

  $scope.$on('$ionicView.enter', function() {
    $scope.chats = AllPromotion.all($stateParams.salvadosId);
  });
  console.log("AllPromotionCtrl called");
  console.log(AllPromotion);
})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
