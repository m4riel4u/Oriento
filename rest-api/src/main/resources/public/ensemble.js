const selectedCourses = [];
const dayMap = { "Lu": "Mon", "Ma": "Tue", "Me": "Wed", "Je": "Thu", "Ve": "Fri" };

// Ajouter un cours à la liste
function addCourse() {
    const input = document.getElementById("courseInput");
    const course = input.value.trim().toUpperCase();

    // Vérification du format : 3 lettres + 4 chiffres
    const sigleRegex = /^[A-Z]{3}\d{4}$/;
    if (!sigleRegex.test(course)) {
        alert("Format invalide ! Le sigle doit être comme IFT2255.");
        return;
    }

    if (!course) return;
    if (selectedCourses.length >= 6) { 
        alert("Maximum 6 cours"); 
        return; 
    }
    if (selectedCourses.includes(course)) return;

    selectedCourses.push(course);
    input.value = "";
    updateCourseList();
}

// Mettre à jour l'affichage de la liste de cours
function updateCourseList() {
    document.getElementById("selectedCourses").textContent =
        selectedCourses.length ? selectedCourses.join(", ") : "—";
}

// Vider tous les cours et l'horaire
function clearAllCourses() {
    selectedCourses.length = 0;
    updateCourseList();
    clearSchedule();
}

// Construire l'horaire pour tous les cours sélectionnés
async function buildSchedule() {
    clearSchedule();

    const semesterInput = document.getElementById("semester").value.trim().toUpperCase();
    if (!semesterInput) {
        alert("Veuillez entrer un trimestre (ex: H25)");
        return;
    }

    for (const courseId of selectedCourses) {
        try {
            const res = await fetch(`/courses/complete/${courseId}`);
            if (!res.ok) {
                console.warn("Cours introuvable:", courseId);
                continue;
            }

            const data = await res.json();
            console.log(`=== DEBUG: Données reçues pour ${courseId} ===`, data);

            const seen = new Set(); // pour éviter les doublons

            data.schedules.forEach(schedule => {
                if (schedule.semester.toUpperCase() !== semesterInput) {
                    console.log(`Skipping schedule ${schedule.semester} car on veut ${semesterInput}`);
                    return;
                }

                const sectionName = schedule.section || "??"; // fallback si section absent

                // Horaires réguliers
                schedule.horaire?.forEach(h => {
                    const key = `Cours|${sectionName}|${h}`;
                    if (!seen.has(key)) {
                        console.log(`DEBUG: ${courseId} - ${sectionName} - Cours horaire:`, h);
                        placeInSchedule(courseId, h, "Cours", sectionName);
                        seen.add(key);
                    }
                });

                // Intra
                if (schedule.intra) {
                    const key = `Intra|${sectionName}|${schedule.intra}`;
                    if (!seen.has(key)) {
                        console.log(`DEBUG: ${courseId} - ${sectionName} - Intra horaire:`, schedule.intra);
                        placeInSchedule(courseId, schedule.intra, "Intra", sectionName);
                        seen.add(key);
                    }
                }

                // Final
                if (schedule.final) {
                    const key = `Final|${sectionName}|${schedule.final}`;
                    if (!seen.has(key)) {
                        console.log(`DEBUG: ${courseId} - ${sectionName} - Final horaire:`, schedule.final);
                        placeInSchedule(courseId, schedule.final, "Final", sectionName);
                        seen.add(key);
                    }
                }
            });

        } catch (e) {
            console.error("Erreur chargement", courseId, e);
        }
    }
}

// Place un horaire dans le tableau
function placeInSchedule(courseId, horaire, type, sectionName) {
    const dayAbbr = horaire.split(" ")[0];
    const dayId = dayMap[dayAbbr];
    if (!dayId) return;

    const cell = document.getElementById(dayId);
    if (!cell) return;

    const contentStr = `${courseId} - ${sectionName} - ${type} ${horaire}`;
    for (const child of cell.children) {
        if (child.textContent === contentStr) return; // éviter doublons
    }

    const div = document.createElement("div");
    div.className = "course-box";
    div.innerHTML = `<strong>${courseId} - ${sectionName} - ${type}</strong><br>${horaire}`;
    cell.appendChild(div);

    console.log(`Ajouté dans ${dayId}: ${contentStr}`);
}

// Vide l'horaire du tableau
function clearSchedule() {
    ["Mon", "Tue", "Wed", "Thu", "Fri"].forEach(d => {
        const cell = document.getElementById(d);
        if (cell) cell.innerHTML = "";
    });
}
