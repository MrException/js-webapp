define(["models/todo", "sinon"], function(Todo, sinon) {

  describe("Todo model", function() {
    var todo;

    beforeEach(function() {
      todo = new Todo({
        title: "Foo Bar"
      });
    });

    describe("when instantiated", function() {

      it("should exhibit attributes", function() {
        expect(todo.get("title")).toEqual("Foo Bar");
      });

      it("should default completed to false", function() {
        expect(todo.get("completed")).toEqual(false);
      });

    });

    describe("url", function() {
      beforeEach(function() {
        var collection = {
          url: "/collection"
        };
        todo.collection = collection;
      });

      describe("when no id set", function() {
        it("should return the collection URL", function() {
          expect(todo.url()).toEqual("/collection");
        });
      });

      describe("when id set", function() {
        it("should return the collection URL and id", function() {
          todo.id = 9;
          expect(todo.url()).toEqual("/collection/9");
        });
      });
    });

    describe("validation", function() {
      it("should not save when title is empty", function() {
        var eventSpy = sinon.spy();
        todo.bind("error", eventSpy);
        todo.save({title: ""});
        expect(eventSpy.calledOnce).toBeTruthy();
        expect(eventSpy.calledWith(todo, "Missing Title")).toBeTruthy();
      });
    });

  });
});
