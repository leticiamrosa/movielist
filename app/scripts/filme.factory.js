movieApp.factory('MeusFilmes', function($q, $http){
  return {
    listar: function(){
      var promessa = $q.defer();

      $http.get("https://movielist-e5fb8.firebaseio.com/filmes.json").then(function(result){
        var filmes = [];

        angular.forEach(result.data, function(filme, id){
          filme.id = id;
          filmes.push(filme);
        });
        promessa.resolve(filmes);
      });
      return promessa.promise;
    },
    inserir: function(filme){
      var id = filme.id;
      delete filme.id;

      return $http.put("https://movielist-e5fb8.firebaseio.com/filmes/" + id + ".json", filme);
    }
  };
});
