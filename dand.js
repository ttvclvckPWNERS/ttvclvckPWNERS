consonnants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'r', 's', 't', 'th', 'v', 'x', 'z'];
vowels = ['a', 'au', 'e', 'i', 'o', 'ou', 'u', 'y'];

name = "";
length = Math.floor(Math.random() * 3) + 2;
for (i = 0; i < length; i++)
    name += (consonnants[Math.floor(Math.random()*consonnants.length)]
        + vowels[Math.floor(Math.random()*vowels.length)]);
name = name.charAt(0).toUpperCase() + name.slice(1);
document.write("<p id='name'>" + name + "</p>");