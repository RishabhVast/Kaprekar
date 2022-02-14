 //let num=document.querySelector("#number").value;
 function kaprekars(){
    let num=document.querySelector("#number").value;
    
 recursion1 = (num) => {
    do {
        let arr = [];
        let text = num.toString();
        let numpush = arr.push(text);
        let splitAss = arr[0].split("");
        let sortVal = splitAss.sort();
        let assending = sortVal.join("");
        let splitDes = sortVal.reverse();
        let desending = splitDes.join("");
        document.writeln("<p>Assending No." + assending+"</p>");
        document.writeln("<p>Dessending No." + desending+"</p>");
        let difference = desending - assending;
    document.writeln("<p>difference " + difference+"</p><br/>");
        num = difference;
    } while (num != 6174);
}
recursion1(num);
 }