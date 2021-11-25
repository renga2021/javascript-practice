let text1 = "What a very ";
text1 += "nice day";
document.getElementById("demo").innerHTML = text1;

// comparsion operators
var a = 10;
var b = 20;
var linebreak = "<br />";

document.write("(a == b) => ");
result = (a == b);
document.write(result);
document.write(linebreak);

document.write("(a < b) => ");
result = (a < b);
document.write(result);
document.write(linebreak);

document.write("(a > b) => ");
result = (a > b);
document.write(result);
document.write(linebreak);

document.write("(a != b) => ");
result = (a != b);
document.write(result);
document.write(linebreak);

document.write("(a >= b) => ");
result = (a >= b);
document.write(result);
document.write(linebreak);

document.write("(a <= b) => ");
result = (a <= b);
document.write(result);
document.write(linebreak);

// Logical operator
var a = true;
var b = false;
var linebreak = "<br />";

document.write("(a && b) => ");
result = (a && b);
document.write(result);
document.write(linebreak);

document.write("(a || b) => ");
result = (a || b);
document.write(result);
document.write(linebreak);

document.write("!(a && b) => ");
result = (!(a && b));
document.write(result);
document.write(linebreak);

// Bitwise operator
var a = 2; // Bit presentation 10
            var b = 3; // Bit presentation 11
            var linebreak = "<br />";
         
            document.write("(a & b) => ");
            result = (a & b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a | b) => ");
            result = (a | b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a ^ b) => ");
            result = (a ^ b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(~b) => ");
            result = (~b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a << b) => ");
            result = (a << b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a >> b) => ");
            result = (a >> b);
            document.write(result);
            document.write(linebreak);
            

            // Assingnment operators
            var a = 33;
            var b = 10;
            var linebreak = "<br />";
         
            document.write("Value of a => (a = b) => ");
            result = (a = b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a += b) => ");
            result = (a += b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a -= b) => ");
            result = (a -= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a *= b) => ");
            result = (a *= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a /= b) => ");
            result = (a /= b);
            document.write(result);
            document.write(linebreak);
         
            document.write("Value of a => (a %= b) => ");
            result = (a %= b);
            document.write(result);
            document.write(linebreak);