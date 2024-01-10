window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

    function makePDF() {
        html2canvas(document.querySelector("#container"), {
            allowTaint:true,
            useCORS: true,
            scale: 2
        }).then(canvas => {
            // stackBlurCanvasRGBA(canvas, 0, 0, canvas.width, canvas.height, 80);
            var img = canvas.toDataURL("image/jpg");
            
            var doc = new jsPDF();
            doc.addImage(img, 'JPG', 7, 13, 195, 280);
            doc.save("Jonastino_Cv");
        });
            
        }

        // barre de progression

      // Barre de progression pour l'anglais
let progression1 = document.getElementById('progression');
let timer1 = setInterval(function(){
    let percentage = parseInt(progression1.getAttribute('data-progress').replace('%', ''));
    percentage += 1;
    progression1.setAttribute('data-progress', percentage + "%");
    progression1.style.width = percentage + "%";
    if (percentage >= 50) {
        progression1.setAttribute('data-progress', "50%");
        clearInterval(timer1);
    }
}, 30);

// Barre de progression pour le français
let progression2 = document.getElementById('progressions');
let timer2 = setInterval(function(){
    let percentage = parseInt(progression2.getAttribute('data-progress').replace('%', ''));
    percentage += 1;
    progression2.setAttribute('data-progress', percentage + "%");
    progression2.style.width = percentage + "%";
    if (percentage >= 78) {
        progression2.setAttribute('data-progress', "78%");
        clearInterval(timer2);
    }
}, 30);

// Barre de progression pour le malgache
let progression3 = document.getElementById('progressionn');
let timer3 = setInterval(function(){
    let percentage = parseInt(progression3.getAttribute('data-progress').replace('%', ''));
    percentage += 1;
    progression3.setAttribute('data-progress', percentage + "%");
    progression3.style.width = percentage + "%";
    if (percentage >= 0) {
        progression3.setAttribute('data-progress', "0%");
        clearInterval(timer3);
    }
}, 30);

      
        
