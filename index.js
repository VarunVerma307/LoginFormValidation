let user = document.getElementById("username");
let pass = document.getElementById("password");

let flag = false;
function validation() {
  if (user.value == "") {
    document.getElementById("userError").innerHTML = "Username is required";
    flag = false;
  } else if (user.value.length < 7) {
    document.getElementById("userError").innerHTML =
      "Minimum 7 character required";
    flag = false;
  } else if (user.value.length >= 7 && user.value != "") {
    let arr = Array.from(user.value);
    let c = 0;
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (arr[i] >= 0 && arr[i] <= 9) {
        c = 1;
        break;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (arr[i] >= 65 && arr[i] <= 90) {
        a = 1;
        break;
      }
    }
    if (!a && !c) {
      document.getElementById("userError").innerHTML =
        "Username should contain atleast one numeric value and one uppercase letter";
      flag = false;
    }
  } else {
    document.getElementById("userError").innerHTML = "";
    flag = true;
  }

  if (pass.value == "") {
    document.getElementById("passError").innerHTML = "Password is required";
    flag = false;
  } else if (pass.value.length < 7) {
    document.getElementById("passError").innerHTML =
      "Minimum 7 character required";
    flag = false;
  } else if (pass.value.length >= 7 && pass.value != "") {
    let arr = Array.from(pass.value);
    let c = 0;
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (arr[i] >= 0 && arr[i] <= 9) {
        c = 1;
        break;
      }
    }
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (arr[i] >= 65 && arr[i] <= 90) {
        a = 1;
        break;
      }
    }

    if (!a && !c) {
      document.getElementById("passError").innerHTML =
        "Password should contain atleast one numeric value, one uppercase letter";
      flag = false;
    }
  }
  
  else {
    document.getElementById("passError").innerHTML = "";
    flag = true;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}
