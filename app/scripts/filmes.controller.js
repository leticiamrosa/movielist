(function(){
  angular
    .module('filmes')
    .controller('FilmesController', function($scope, MeusFilmes) {
      $scope.titulo = "myFilmes";
      $scope.subtitulo = "Minha Lista"

      $scope.filmes = [];
      var carregarFilmes = function(){
        MeusFilmes.listar().then(function(filmes){
          $scope.filmes = filmes;
        });
      }



      MeusFilmes.listar();
      $scope.novoFilme = {};

      $scope.criarFilme = function() {
      	var filme = {
      		id: Date.now() + "",
      		titulo: $scope.novoFilme.titulo,
      		ano: $scope.novoFilme.ano,
      		produtora: $scope.novoFilme.produtora,
      		sinopse: $scope.novoFilme.sinopse,
      		cartaz: $scope.novoFilme.cartaz
      	};

        MeusFilmes.inserir(filme).then(carregarFilmes);
      	$scope.novoFilme = {};
      }

      $scope.removerFilme = function(id) {
      	angular.forEach($scope.filmes, function(filme, i){
      		if(filme.id == id){
      			$scope.filmes.splice(i, 1);
      		};
      	});
      }

      carregarFilmes();

    });
})();
