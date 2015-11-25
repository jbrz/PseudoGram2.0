let HomeController = function (ImageService) {
  let vm = this;
  vm.images = [];

  ImageService.getAllImages().then ( (res) => {
    vm.images = res.data.results;
  });

};

HomeController.$inject = ['ImageService'];

export default HomeController;