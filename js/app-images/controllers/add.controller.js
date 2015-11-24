let AddController = function($state, $scope, PARSE, ImageService) {
  
  let vm = this;
  vm.addImage = addImage;

  function addImage(imgObj) {
    ImageService.addImage(imgObj).then( (res) => {
      $state.go('root.home');
    });
  }

};

AddController.$inject = ['$state', '$scope', 'PARSE', 'ImageService'];

export default AddController;