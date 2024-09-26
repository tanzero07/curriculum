// script.js

let votes = {
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0,
    option5: 0,
    option6: 0,
    option7: 0,
    option8: 0
};

// สร้างกราฟด้วย Chart.js
let ctx = document.getElementById('voteChart').getContext('2d');
let voteChart = new Chart(ctx, {
    type: 'bar', // ประเภทของกราฟ: bar, line, pie, etc.
    data: {
        labels: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'],
        datasets: [{
            label: 'Votes',
            data: [0, 0, 0, 0, 0, 0, 0, 0], // ค่าเริ่มต้นของจำนวนโหวต
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
// ฟังก์ชันสำหรับการกดโหวต
function vote(option) {
    // เพิ่มจำนวนโหวตให้กับตัวเลือกที่ถูกกด
    votes[option]++;
    // อัปเดตจำนวนโหวตในหน้าเว็บ
    document.getElementById(`${option}-result`).innerText = votes[option];
    
    // อัปเดตจำนวนโหวตในกราฟ
    const index = Object.keys(votes).indexOf(option);
    voteChart.data.datasets[0].data[index] = votes[option];
    voteChart.update(); // อัปเดตกราฟใหม่
}
