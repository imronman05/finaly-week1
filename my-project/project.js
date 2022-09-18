let data = []

function addBlog(){
    let projectName = document.getElementById('name').value;
    let startDate = document.getElementById('start-date').value;
    let endDate = document.getElementById('end-date').value;
    let description = document.getElementById('message').value;
    let technologies = document.getElementsByClassName('checkbox');
    let image = document.getElementById('file');
    

    if(image.files[0].type == ''){
        return alert('yang anda masukan bukan gambar')
    }

    let images = URL.createObjectURL(image.files[0])
    
    let startTime = new Date(startDate);
    let endTime = new Date(endDate);

    let conversion = convers(startTime,endTime);

    let valuetechnologies = [];
    
    for (let i = 0; i < technologies.length; i++) {
        if(technologies[i].checked){
            valuetechnologies.push(technologies[i].value)
        }
    }

    if(projectName == undefined || startTime == undefined || valuetechnologies.length == 0){
        return alert('isikan data form dengan benar');
    }
    
    displayBlog(projectName ,description,images,valuetechnologies,conversion);
    
    let obj = {
        nameProject : projectName,
        dateStart : startTime,
        dateEnd : endTime,
        desc: description,
        tech: valuetechnologies,
        imagess: images
    }

    data.push(obj);
}

function convers(start,end){    
    let distance2 = Math.abs(start - end)/1000;
    
    const secondInHours = 3600;
    const hoursInDay = 24;

    let day = Math.floor(distance2 / (secondInHours * hoursInDay));
    let hours   = Math.floor((distance2 - (day * (secondInHours * hoursInDay)))/secondInHours);
    let minutes = Math.floor((distance2 - (day * (secondInHours * hoursInDay)) - (hours * secondInHours)) / 60);
    let seconds = Math.floor(distance2 - (day * (secondInHours * hoursInDay)) - (hours * secondInHours) - (minutes * 60));

    let convertBulan = Math.floor(day % 365);
    let bulan = Math.floor(convertBulan / 30);
    let tahun = Math.floor(day / 365);

    if(tahun > 0){
        return `${tahun} year`;
    }else if(bulan > 0){
        return `${bulan} month`;
    }else if(day > 0){
        return `${day} day`
    }else if(hours > 0){
        return `${hours} hours`;
    }else if(minutes > 0){
        return `${minutes} minutes`;
    }else {
        return `${seconds} seconds`;
    }

}

function displayBlog(nameProject,descProject,imageProject,techProject,conversionDate){
    let  hasil = [];

    for(let j = 0; j < techProject.length;j++){

        if(techProject[j].includes('Javascript')){
            hasil.push(`<i class="fa-brands fa-square-js"></i>`);

        }else if(techProject[j].includes('Css')){

            hasil.push(`<i class="fa-brands fa-css3-alt"></i>`);

        }else if(techProject[j].includes('React Js')){

            hasil.push(`<i class="fa-brands fa-react"></i>`);

        }else if(techProject[j].includes('golang')){
            hasil.push(`<i class="fa-brands fa-golang"></i>`);

        }
    }

    const display = document.getElementById('card-blog');
    
        display.innerHTML += `
        <div class="card" id='card'>
            <div class="card-image">
                <img src="${imageProject}" alt="gambar project">
            </div>
            <h3>${nameProject}</h3>
            <span>durasi: ${conversionDate}</span>
            <p>${descProject}</p>
            <div class="icon-tech" id='test'>
                ${hasil.join('')}
            </div>
            <div class="btn-edit-delete">
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
        `        
}
    const card = document.getElementById('card-blog');
        card.addEventListener('click',function(e){
            let test = this.children;
            for(let i = 0; i < test.length; i++){
                test[i].addEventListener('click',function(e){
                    const a = document.createElement('a');

                        a.href = `../blog/blog.html`;
                        // a.target = '_blank';
                        a.click();
                })
            }
        })

const form = document.getElementById('button-send');
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        addBlog()
    })