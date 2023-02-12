startAcademy(someAcademy /*:Academy     -- ovde se dodava vo typescript */){          
    this.academy = someAcademy;                              
    someAcademy.students.push(this);              //vaka se pisuva na tip academy se dodava tip student
}