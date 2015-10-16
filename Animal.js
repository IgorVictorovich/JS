/*
Написать класс Dog, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
Пример использования:
var dog = new Dog ('Aban');
dog.getName () === 'Aban'; // true
dog.bark () === 'Dog Aban is barking'; // true
*/

;(
  function(){
    function Animal(name){
      this.name=name;
    }
    Animal.prototype.getName = function () {
      return this.name;
    };

    function Dog(name){
      this.name=name;
    }
    Dog.prototype=Object.create(Animal.prototype);

    Dog.prototype.bark = function () {
      return "Dog {dogname} is barking".replace("{dogname}",this.name);
    };
    var dog = new Dog ('Aban');
    window._DogClass=dog;
  }
)();
