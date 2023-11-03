class Shape {
  constructor() {
    this.color = "";
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="0, 0 150, 0 75, 150" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="25" r="50" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="100" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
