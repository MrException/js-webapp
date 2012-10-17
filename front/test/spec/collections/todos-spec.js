define(["models/todo", "collections/todos", "sinon"], function(Todo, Todos, sinon) {
  var that = this;
  that.Todo = Todo;

  describe("Collection :: Todos", function() {

    describe("basic functionality", function() {
      var todoStub;
      var todos;

      beforeEach(function() {
        todoStub = sinon.stub(that, "Todo");
        var model = new Backbone.Model({
          id: 5, 
          title: "Foo"
        });
        todoStub.returns(model);
        todos = new Todos();
        todos.model = Todo; // reset model relationship to use stub
        todos.add({
          id: 5, 
          title: "Foo"
        });
      });

      afterEach(function() {
        todoStub.restore();
      });

      it("should add a model", function() {
        expect(todos.length).toEqual(1);
      });

      it("should find a model by id", function() {
        expect(todos.get(5).get("id")).toEqual(5);
      });
    });

    describe("server interaction", function() {
      var todos;
      var server;

      beforeEach(function() {
        server = sinon.fakeServer.create();
        todos = new Todos();
      });

      afterEach(function() {
        server.restore();
      });

      it("should make the correct request", function() {
        todos.fetch();
        expect(server.requests.length).toEqual(1);
        expect(server.requests[0].method).toEqual("GET");
        expect(server.requests[0].url).toEqual("/todos");
      });
    });
  });
});
