document.querySelector("#gen-btn").addEventListener("click", () => {
  const qrText = document.querySelector("input");
  if (qrText.value !== "") {
    const generated = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    document.querySelector("img").src = generated;
    document.querySelector("img").className = "mx-auto mt-5 p-2 bg-slate-500";
    document.querySelector("#img-container").className =
      "w-full max-h-400px block";
  } else {
    alert("Enter link to procced");
    document.querySelector("#img-container").classList.add("max-h-0 none");
  }
});
