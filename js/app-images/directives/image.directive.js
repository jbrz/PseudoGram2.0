let singleImage = function($state, ImageService, $timeout) {
  
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      image: "="
    },
    template: `
    <div class="imageList">
      <li class="imageListItem">
          <img class="pic" ng-src="{{ image.url }}">
          <div class="clicked">
            <img src="/images/heart.gif">
            <div class="likes">{{ image.likes }}</div>
          </div>
      </li>
    </ul>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        angular.element(this).children().children('.clicked').toggleClass('show');
        ImageService.like(scope.image);
      });

    }
  };
};

singleImage.$inject = ['$state', 'ImageService', '$timeout'];

export default singleImage;