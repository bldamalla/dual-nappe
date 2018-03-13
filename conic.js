// conic stuff

class Conic {
  constructor(type, idx) {
    this.type = type;
    this.idx = idx;
    if (type == 0) {
      //parabola
      this.o = Math.floor(Math.random()*2);
      this.h = Math.floor(Math.random()*10)-5;
      this.k = Math.floor(Math.random()*10)-5;
      this.lr = 0;
      while (this.lr==0)
        this.lr = Math.floor(Math.random()*10)-5;
      this.c = this.lr/4;
    } else if (type == 1) {
      // ellipse
      this.a = Math.ceil(Math.random()*10);
      this.b = Math.ceil(Math.random()*10);
      if (this.b > this.a) {
        this.b = this.b + this.a;
        this.a = this.b - this.a;
        this.b = this.b - this.a;
      }
      this.c = Math.pow(Math.pow(this.a, 2)-Math.pow(this.b, 2), 0.5);
      this.h = Math.floor(Math.random()*10)-5;
      this.k = Math.floor(Math.random()*10)-5;
    } else {
      // hyperbola
      this.o = Math.floor(Math.random()*2);
      this.a = Math.ceil(Math.random()*10);
      this.b = Math.ceil(Math.random()*10);
      this.c = Math.hypot(this.a, this.b);
      this.h = Math.floor(Math.random()*10)-5;
      this.k = Math.floor(Math.random()*10)-5;
    }
  }

  // get string representation of the std form of the conic
  get std_eqn() {
    if (this.type == 0) {
      // parabola
      if (this.o == 0)
        return "$$(y"+ (this.k > 0 ? "-" : "+")+ Math.abs(this.k) +")^2 = " + this.lr + "(x" + (this.h > 0 ? "-" : "+") + Math.abs(this.h) + ")$$"
      else
        return "$$(x"+ (this.h > 0 ? "-" : "+")+ Math.abs(this.h) +")^2 = " + this.lr + "(y" + (this.k > 0 ? "-" : "+") + Math.abs(this.k) +")$$"
    } else if (this.type == 1) {
        return "$$\\dfrac{(x"+ (this.h > 0 ? "-" : "+") + Math.abs(this.h) + ")^2}{"+this.a+"^2} + \\dfrac{(y"+(this.k > 0 ? "-" : "+")+Math.abs(this.k)+")^2}{"+this.b+"^2} = 1$$"
    } else {
      if (this.o == 0)
        return"$$\\dfrac{(x"+ (this.h > 0 ? "-" : "+") + Math.abs(this.h) + ")^2}{"+this.a+"^2} - \\dfrac{(y"+(this.k > 0 ? "-" : "+")+Math.abs(this.k)+")^2}{"+this.b+"^2} = 1$$"
      else
        return "$$\\dfrac{(y"+ (this.k > 0 ? "-" : "+") + Math.abs(this.k) + ")^2}{"+this.a+"^2} - \\dfrac{(x"+(this.h > 0 ? "-" : "+")+Math.abs(this.h)+")^2}{"+this.b+"^2} = 1$$"
    }
  }
  
  // solve the conic
  // is the thing to solve : Position, Latus Rectum, 
  get choices_ans() {
    switch (this.idx) {
      case 0:
        // this is for position
        var choices = [
        "$$("+this.h+","+this.k+")$$",
        "$$("+ (this.h == 0 ? (this.h+'x') : -this.h) +","+ -this.k +")$$",
        "$$("+ (this.k == 0 ? (this.h+'x') : -this.k) +","+ this.h +")$$",
        "Degenerate"];
        return knuth(choices, 0);
        break;
      case 1:
        // this is LR length
        // split between central ana parabola
        if (this.type == 0) {
          var choices = [
          "$$"+Math.abs(this.lr)+"$$",
          "$$"+m_round(Math.abs(this.lr)/4)+"$$",
          "$$"+ (this.lr < 0 ? this.lr : (this.lr)/2) +"$$",
          "Degenerate"];
          return knuth(choices, 0)
        }
        else {
          var choices = [
          "$$"+2*m_round(Math.pow(this.b,2)/this.a)+"$$",
          "$$"+2*m_round(Math.pow(this.a-this.b, 2))+"$$",
          "$$"+2*m_round(Math.pow(this.a,1)/this.b)+1+"$$",
          "Degenerate"];
          return knuth(choices, 0);
        }
        break;
      case 2:
        // eccentricity
        var choices = ["$$1$$", "$$< 1$$", "$$> 1$$", "Degenerate"];
        return knuth(choices, this.type);
        break;
      default:
        // focus
        // split between central and parabola
        var symb = this.type == 0 ? "+" : "\\pm"
        var choices = [
        "$$("+this.h+", "+this.k+")$$",
        "$$("+this.h+symb+m_round(this.c)+", "+this.k+")$$",
        "$$("+this.h+", "+this.k+symb+m_round(this.c)+")$$",
        "Degenerate"];
        return knuth(choices, 1+this.o);
    }
  }
}

function rand_conic() {
  // if 0 parabola
  // if 1 ellipse
  // if 2 hyperbola
  var s = Math.floor(Math.random() * 3);
  var idx = Math.floor(Math.random() * 4);
  return new Conic(s, idx);
}

function m_round(number) {
  // special round
  return Math.round(100*number) / 100
}

// tracking knuth shuffle
function knuth(arr, key) {
  for (var i = arr.length-2; i > 0; i--) {
    l = Math.floor(Math.random()*i);
    temp = arr[i];
    arr[i] = arr[l];
    arr[l] = temp;
    if (key == l)
      key = i;
    else if (key == i)
      key = l;
    else
      continue;
  }
  return [arr, key];
}