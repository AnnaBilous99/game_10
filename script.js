function propast() {
  alert("צריך להציל את הנסיכה שלנו שהקוסם גנב וכישף אותה וכל עולם הזה");
  alert("לפניך תהום");

  let x = prompt("לקפוץ או ללכת");
  if (x == "לקפוץ") {
    alert("the end");
  } else if (x == "ללכת") {
    alert("אתה עברתה דרך גשר");
    alert("מה אתה עושה האלה עוצר או ממשיך ללכת");
    samolet();
  }
}

function samolet() {
  let y = prompt("לעצור או ללכת");
  if (y == "ללכת") {
    alert("עליך נפל מטוס אתה מת ");
    propast();
  } else if (y == "לעצור") {
    alert("לפניך נפל מטוס אתה נשרת בחיים");
    alert("מה לעשות האלה להמשיך ללכת או לטוס במטוס");
    latus();
  }
}

function latus() {
  let z = prompt("להמשיך או לטוס");
  if (z == "להמשיך") {
    alert("מתת מהתייבשות");
    propast();
  } else if (z == "לטוס") {
    alert("אתה טס במטוס");
    alert("לפניך בחירה קשה");
    prizemlitsa();
  }
}

function prizemlitsa() {
  let a = prompt("להנחית את המטוס ביבשה או במיים");
  if (a == "ביבשה") {
    alert("לתוך המטוס זחל נחש  הוא נשך אותך אתה מת");
    propast();
  } else if (a == "במיים") {
    alert("הכל בסדר אתה בחיים");
    alert(" מה אתה צריך לעשות עכשיו לשחות או לצלול ");
    podvodoi();
  }
}
function podvodoi() {
  let m = prompt("לשחות או לצלול");
  if (m == "לשחות") {
    alert(
      "אתה שחיתה טוב וכנרא הייתה נשר בחיים אבל בהאי יש נחש שנשח אותך ואתה מת"
    );
    propast();
  } else if (m == "לצלול") {
    alert("אתה בחיים. ואתה רואה טירה של נסיכה");
    alert("לפניך מנול אתה צריך לנחש את הקוד");
    zagadka();
  }
}
function zagadka() {
  let r = prompt("באיזה שנה אתה נלדת");
  if (r <= 1980) {
    alert("נסיכה קטנה בשבילך ");
    propast();
  } else if (r >= 2002) {
    alert("נסיכה כבר זקנה בישבלך");
    propast();
  } else if (r >= 1980 && r <= 2002) {
    alert("נסיכה מחקה שתציל אותה");
    alert("אתה צריך למצוא את הנסיכה");
    alert("אתה רואה אבטחה מה אתה עושה. רץ או לוחץ על לחצן");
    oxrana();
  }
}

function oxrana() {
  q = prompt("ללחוץ או לרוץ");
  if (q == "לרוץ") {
    alert("אבטחה תפסה אותך");
    propast();
  } else if (q == "ללחוץ") {
    alert("אתה הצלחת להדליק אזעקה. אבטחה לא מבינים מה קורה וכולם רצים ");
    alert("בנתיים כשאבטחה לא פה תרוץ לחדר של הנסיכה");
    alert("המכשף - שם 3 דלתות. אתה צריך להבין איפה נסיחה");
    delet();
  }
}
function delet() {
  d = Number(prompt("תבחר דלת 1 2 3 "));
  if (d == 1 || d == 3) {
    alert("oops");
    alert("דרקון אכל אותך");
    propast();
  } else if (d == 2) {
    alert("ישששש עוד קצת ומצאת אותה");
    alert("אבל לפניך עוד דלת תבחר1 2 3");
    delet1();
  }
}
function delet1() {
  d = Number(prompt("תבחר דלת 1 2 3 "));
  if (d == 2 || d == 3) {
    alert("oops");
    alert("דרקון אכל אותך");
    propast();
  } else if (d == 1) {
    alert("יש אתה מצאת אותה");
    alert("אבל היא ישנה");
    alert("מעשים שלך עכשיו לנשק אותה או ללכת");
    pozelyi();
  }
}
function pozelyi() {
  v = prompt("לנשק או ללכת");
  if (v == "ללכת") {
    alert("אתה מטומטם כי עברת כל זה בשביל לעזוב הכל");
    propast();
  } else if (v == "לנשק") {
    alert("אתה הציל את הנסיכה הכי יפה");
    alert("סיימת משחק");
  }
}
