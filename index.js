const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  return kittens.shift();
}

function appendKitten(name) {
  var newKittens = kittens.map(function(x) {
    return x;
  });
  newKittens.push(name);
  return newKittens;
}

function prependKitten(name) {
  var newKittens = kittens.map(function(x) {
    return x;
  });
  newKittens.shift(name);
  return newKittens;
}
