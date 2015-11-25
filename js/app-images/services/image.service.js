let ImageService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/im2';

  this.getAllImages = getAllImages;
  this.addImage = addImage;
  this.like = like;

  function Image (imgObj) {
    this.title = imgObj.title;
    this.url = imgObj.url;
  }

  function getAllImages () {    
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
    });
  }

  function addImage (imgObj) {
    let i = new Image(imgObj);
    i.likes = 0;
    return $http.post(url, i, PARSE.CONFIG);
  }

  function like(obj) {
    updateLikes(obj);  
  }

  function updateLikes (obj) {
    obj.likes = obj.likes + 1;
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  }


};

ImageService.$inject = ['$http', 'PARSE'];

export default ImageService;