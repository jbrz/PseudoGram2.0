let singleImage = function($state, ImageService, $timeout) {
  
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      image: "=brzi"
    },
    template: `
    <ul class="imageList">
      <li class="imageListItem">
        <img class="insta" ng-src="{{ image.url }}">
         <div class="click">
          <img class="heart" src="/images/like.png">
          <div class="likes">{{ image.likes }}</div>
        </div>
      </li>
    </ul>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        angular.element(this).children().children('.click').toggleClass('show');
        ImageService.like(scope.image);
      });

    }
  };
};

singleImage.$inject = ['$state', 'ImageService', '$timeout'];

export default singleImage;