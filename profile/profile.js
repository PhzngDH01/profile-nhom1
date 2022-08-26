let button = document.getElementById("btn");
console.log(button);
button.onclick = function () {
  Swal.fire({
    position: "centent",
    icon: "success",
    title: "Email or Password is incorrect",
    showConfirmButton: false,
    timer: 1500,
  });
};
