let HomeController = function (ImageService) {
  let vm = this;
  vm.images = [];

  ImageService.getAllImages().then ( (res) => {
    vm.images = res.data.results;
  });
  console.log(vm.images);

};

HomeController.$inject = ['ImageService'];

export default HomeController;