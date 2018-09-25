module.exports = function solveEquation(equation) {
	
    const newArr = equation.split(' ');
  
    a=newArr[0];
    diffOne=newArr[3];
    b=newArr[4];
    diffTwo=newArr[7];
    c=newArr[8];
  
    if (diffOne==='-') {b=-b;}
    if (diffTwo==='-') {c=-c;}
  
    d=Math.sqrt((Math.pow(b,2))-(4*a*c));
  
    if (d === 0) {x1=(-b)/(2*a); x2=x1;}
  
    x1=Math.round((-b+d)/(2*a));
    x2=Math.round((-b-d)/(2*a));
  
    if (x1>x2) {return solution = [x2,x1];} else {return solution = [x1,x2];}
  }