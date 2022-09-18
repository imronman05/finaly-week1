//Funtion untuk validasi form kontak
function sendContact(){
    let name = document.getElementById('name').value; //untuk menangkap element di html berdasarkan ID
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if(name == ' ' || email == ' ' || phone == ' ' || subject == '' || message == ''){
            return alert('Isikan form dengan benar!!!');
    }

    const emailReceiver = 'imronman1998@gmail.com'; //Email penerima
    const a = document.createElement('a'); //membuat element baru

    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${subject}&body=hai perkenalkan nama saya ${name}, ${message}, berikut nomor yang bisa anda hubungi ${phone} atau email lain nya ${email}`; //send email dengan value/nilai yang didapatkan pada variabel tertentu
    
    a.target = '_blank'; //membuka tab baru pada browser secara otomatis
    a.click(); //metode digunakan untuk mengeksekusi klik pada elemen, yang seolah-olah user mengkliknya secara manual.

}

const buttonSend = document.getElementById('button-send'); //menangkap element button yang memiliki id button-send

    //eventListener berfungsi untuk melakukan action/aksi pada button-send ketika di klik
    buttonSend.addEventListener('click',function(e){
        e.preventDefault() //metode agar browser tidak refresh pada saat button di klik 
        sendContact() //function sendContact() akan di panggil dan dijalankan pada saat button-send diklik oleh user
    })