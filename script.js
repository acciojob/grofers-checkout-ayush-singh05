const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const price = document.getElementsByClassName("price");
const getSum = () => {
//Add your code here
	let val = 0;
    let val1 = price[0].innerText;
val += parseInt(price[0].innerText) 
val += parseInt(price[1].innerText) 
val += parseInt(price[2].innerText) 
val += parseInt(price[3].innerText)
val += parseInt(price[4].innerText) 

const p = document.createElement("p");
p.innerText = val;
	p.id = "ans";
document.body.appendChild(p);
};

getSumBtn.addEventListener("click", getSum);

