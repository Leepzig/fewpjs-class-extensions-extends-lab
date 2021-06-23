// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
  }
  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a, b )=> a +b)
  }
}

class Triangle extends Polygon {
  
  get isValid() {
    const res = this.sides[0] + this.sides[1] > this.sides[2]
    const res2 = this.sides[2] + this.sides[1] > this.sides[0]
    const res3 = this.sides[0] + this.sides[2] > this.sides[1]
    const valid = res === res2 === res3

    if (this.countSides === 3 && valid ) {
      return true
    } else {
      return false
    }
  }


}




class Square extends Polygon {

  get isValid() {
    const val = this.sides[1] === this.sides[2] === this.sides[3] === this.sides[0]
    if (this.countSides === 4 && val) {
      return true
    } else {
      return false
    }
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}

const pentagon = new Polygon([5, 5, 5])
pentagon.perimeter()

const tri = new Triangle