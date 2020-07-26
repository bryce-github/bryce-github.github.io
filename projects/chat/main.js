document.querySelector("#msg-send").addEventListener("click", function() {
    let text = document.querySelector("#msg-text");
    let list = document.querySelector("#msg-list");
    let bubble = document.createElement("li");
    bubble.innerText = text.value;
    text.value = "";
    document.querySelector("#msg-send").disabled = true;
    list.append(bubble)
})

document.querySelector("#msg-text").addEventListener("input", function(e) {
    // this.style.height = "3px";
    // this.style.height = this.scrollHeight+"px";
    console.log("e")
    console.log(this.scrollHeight);
    this.style.height = "1px";
    this.style.height = (this.scrollHeight-19)+"px";
    console.log(this.style.height);

    if (this.value === "") {
        document.querySelector("#msg-send").disabled = true;
    } else {
        document.querySelector("#msg-send").disabled = false;
    }
})