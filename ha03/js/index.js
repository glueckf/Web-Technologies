
// Aufgabe 3.1.1
function notGoodGrades(grades) {

  return grades.filter((object) => object.grade >= "3,0")
  // TODO: implement me
}


// Aufgabe 3.1.2
function gradeOverview(students, grades) {

  return students
    // TODO: implement me
}

// Aufgabe 3.1.3
function duplicateStudents(students) {
    // Erstelle ein leeres Array für das Endergebnis
    let result = [];

    // Extrahiere nur die Matrikelnummern
    let matrikelnummer = students.map((student) => student.matrikelnummer);

    // Zähle die Häufigkeit jeder Matrikelnummer mit reduce
    let count = matrikelnummer.reduce((acc, curr) => {
        // Erhöhe den Zähler für die aktuelle Matrikelnummer um 1
        // Wenn die Nummer zum ersten Mal vorkommt, starte bei 0
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    // Finde die Matrikelnummern, die mehrfach vorkommen
    let duplicateMatnos = Object.entries(count)
        .filter(([matno, frequency]) => frequency > 1)  // Behalte nur Einträge mit Häufigkeit > 1
        .map(([matno]) => parseInt(matno));            // Wandle die Matrikelnummern in Zahlen um

    // Erstelle für jede doppelte Matrikelnummer einen Eintrag im gewünschten Format
    result = duplicateMatnos.map(matno => ({
        matrikelnummer: matno,                         // Die doppelte Matrikelnummer
        students: students.filter(student =>            // Alle Studenten mit dieser Nummer
            student.matrikelnummer === matno)
    }));

    return result;
}

// Aufgabe 3.1.4
function invalidGrades(grades) {
  return grades
    // TODO: implement me
}
