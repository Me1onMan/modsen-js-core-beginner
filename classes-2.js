class Rectangle {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter = () => {
    return (this.width + this.height) * 2;
  };

  calculateSquare = () => {
    return this.width * this.height;
  };
}

const rectangle = new Rectangle(4, 5);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
console.log(`Square: ${rectangle.calculateSquare()}`);
