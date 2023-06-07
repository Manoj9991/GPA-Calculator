function calculateGPA() {
    var totalCredits = 0;
    var totalGradePoints = 0;

    var table = document.getElementById("table2");
    var rows = table.getElementsByTagName("tr");

    for(var i=0; i < rows.length-1; i++){
        var row = rows[i];
        var credit = parseFloat(row.querySelector(".grade").value);
        console.log(credit);
        //var credit = parseFloat(row.document.getElementById())
        
        var grade = parseFloat(row.querySelector("select").value);
        console.log(grade);
        if(!isNaN(credit) && !isNaN(grade)) {
            totalCredits += credit;
            totalGradePoints += credit * grade;
        }
    }
    console.log(totalCredits);
    console.log(totalGradePoints);
    var gpa = totalGradePoints / totalCredits;
    console.log(gpa);
    if(!isNaN(gpa)){
        document.getElementById("result").textContent = gpa.toFixed(2);
    }
}
