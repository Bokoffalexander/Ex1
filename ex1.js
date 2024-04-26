/////////// Start of function ////////////
function comps(n) {
  let res = "";
  const s056789 = "компьютеров";
  const s1 = "компьютер";
  const s234 = "компьютера";

  if (
    n % 10 == 0 ||
    n % 10 == 5 ||
    n % 10 == 6 ||
    n % 10 == 7 ||
    n % 10 == 8 ||
    n % 10 == 9
  ) {
    res = n + " " + s056789;
  }

  if (n % 10 == 1) {
    res = n + " " + s1;
  }

  if (n % 10 == 2 || n % 10 == 3 || n % 10 == 4) {
    res = n + " " + s234;
  }

  return res;
}

/////////// End of function ////////////
//console.log(comps(109));
