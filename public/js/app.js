const app = angular.module('MyApp', []);

app.controller('MainController', ['$http', function($http) {
  console.log('hi');

  this.copyRabbit = (rabbit) => {
    this.rabbitCopy = Object.assign({}, rabbit);
    console.log(this.rabbitCopy);
  }

  this.getRabbits = () => {
    $http({
      method:'GET',
      url:'/rabbits'
    }).then(response => {
      this.rabbits = response.data
      // this.rabbitCopy = Object.assign({}, this.rabbits);
      // console.log(this.rabbitCopy);
    })
  }

  this.createRabbit = () => {
    $http({
      method:'POST',
      url:'/rabbits',
      data: {
        color: this.color,
        location: this.location,
        size: this.size,
        image: this.image
      }
    }).then(response => {
      console.log(response);
      this.getRabbits();
    }, error => {
      console.log(error);
    })
  }

  this.updateRabbit = (rabbit) => {
    $http({
      method:'PUT',
      url:'/rabbits/' + rabbit._id,
      data: rabbit
    }).then(response => {
      console.log(response);
      this.getRabbits();
    }, error => {
      console.log(error);
    })
  }

  this.removeRabbit = (rabbit) => {
    $http({
      method:'DELETE',
      url:'/rabbits/' + rabbit._id
    }).then(response => {
      console.log(response);
      this.getRabbits();
    }, error => {
      console.log(error);
    })
  }

  this.getRabbits();
}])
