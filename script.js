let dataArray = []; // อาร์เรย์เก็บข้อมูล

function addItem() {
    let userInput = prompt("ป้อนข้อมูลที่ต้องการเพิ่ม:");
    if (userInput !== null && userInput.trim() !== "") {
        dataArray.push(userInput); // เพิ่มค่าเข้าอาร์เรย์
        displayList(); // แสดงผลใหม่
    }
}

function displayList() {
    let listElement = document.getElementById("list");
    listElement.innerHTML = ""; // ล้างข้อมูลเก่า

    dataArray.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}
