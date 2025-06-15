// FORM ELEMENTS STARTS HERE!
// Form element.
const infoForm = document.getElementById("form");
// Avatar upload elemetns.
const dropArea = document.getElementById("drop-area");
const avatarInput = document.getElementById("avatar-input");
const avatarPreview = document.getElementById("upload-icon");
const avatarText = document.getElementById("upload-text");
const photoActions = document.getElementById("file-actions");
const removeBtn = document.getElementById("remove-image");
const changeBtn = document.getElementById("change-image");
const avatarHint = document.getElementById("upload-hint");
const avatarHintText =document.getElementById("avatar-hint-text");
const uploadBox = document.querySelector('.upload');
// Full name and hint.
const nameInput = document.getElementById("full-name-input");
const nameHint = document.getElementById("name-hint");
// Email adress and hint. 
const emailInput = document.getElementById("email");
const emailHint = document.getElementById("email-hint");
// Git Hub username and hint.
const githubInput = document.getElementById("github");
const githubHint = document.getElementById("github-hint");
// Submit button.
const submitBtn = document.getElementById("submit");
// FORM ELEMENTS END HERE!

// TICKET ELEMENTS START HERE!
// Ticket element.
const ticket = document.getElementById("ticket");
// Ticket name for the title and the ticket element.
const ticketName = document.querySelectorAll("#nameValue");
// Ticket email element.
const ticketEmail = document.getElementById("emailValue");
// Ticket avatar element.
const ticketAvatar = document.getElementById("ticket-avatar")
// Ticket git hub element.
const tikcetGithub = document.getElementById("githubValue");
//TICKET ELEMENTS END HERE!

// Function to validate upload size,type and hndle the avatar error.
function validateUpload (file){
    const maxSize = 500 * 1024;
    const allowedTypes = ['image/jpg', 'image/png']
    if (!file || allowedTypes.includes(file.type)) {
        avatarHint.style.color = 'var(--button-hover)';
        return false;
    }
    if (file.size > maxSize){
        avatarHint.style.color = 'var(--button-hover)';
        avatarHintText.textContent = 'File too large! Please upload a photo under 500KB ';
        return false;
    }
    avatarHint.style.color = 'var(--text-white)';
    avatarHintText.textContent = 'Upload your photo (JPG or PNG, max size: 500KB).';
    return true;
}

// Function to validate name input and handle error.
function validateName (name){
    const nameRedex = /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/;
    if(!name || !nameRedex.test(name.trim())){
        nameHint.style.display = 'block';
        return false;
    }
    nameHint.style.display = 'none';
    return true;
}

// Function to validate email address and handle error.
function validateEmail (email){
    const emailRedex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRedex.test(email.trim())){
        emailHint.style.display = 'block';
        return false;
    }
    emailHint.style.display = 'none';
    return true;
}

// Function to validate git hub username and handle error.
function validateGithub (github) {
    const githubRedex = /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/;
    if (!github || !githubRedex.test(github.trim())){
        github.style.display = 'block';
        return false;
    }
    githubHint.style.display = 'none';
    return true;
}

// Function for the image preview
function imagePreview (file){
    if (validateUpload(file)) {
        const imageLink = URL.createObjectURL(file);
        avatarPreview.src = imageLink;
        ticketAvatar.src = imageLink;
        avatarPreview.style.padding = 0;
        avatarText.style.display = 'none';
        photoActions.style.display = 'block';
        avatarInput.disabled = true;
        return;
    }
}
// Function to add and remove outline on the input elments.
function addOutline (element){
    element.style.outline = "0.125rem solid var(--border)";
    element.style.outlineOffset = "0.25rem";
}
function removeOutline (element){
    element.style.outline = "none";
    element.style.outlineOffset = 0;
}


// Event listeners for the photo upload.
avatarInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    imagePreview(file);
})
dropArea.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
    addOutline(uploadBox);

})
dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    addOutline(uploadBox);
})
dropArea.addEventListener('dragleave', (e => {
    removeOutline(uploadBox);
}))
dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();  
    removeOutline(uploadBox);
    const file = e.dataTransfer.files[0];
    imagePreview(file);
    
})

// Event listeners for the removeBtn and the changeBtn.
removeBtn.addEventListener('click', () => {
    avatarPreview.src = "/assets/images/icon-upload.svg";
    avatarPreview.style.padding = "0.5rem";
    avatarText.style.display = 'block';
    photoActions.style.display = 'none';

    avatarInput.disabled = false;
})

changeBtn.addEventListener('click', () => {
    avatarInput.disabled = false;
    avatarInput.click();

})
console.log(infoForm.style.display)
console.log(ticket) 
console.log(validateName(nameInput.value))
console.log(validateEmail(emailInput.value))
console.log(validateGithub(githubInput.value))
//Evant Listener for the submit button.
submitBtn.addEventListener('click',() => {
    console.log('clicked')
    console.log(validateName(nameInput.value.trim()), validateGithub(githubInput.value.trim()), validateEmail(email.value.trim()))
    if(validateName(nameInput.value.trim()) && validateGithub(githubInput.value.trim()) && validateEmail(email.value.trim())){
        console.log('clicked if')
        ticketName.forEach((el) => {
            console.log('name')
            el.textContent = nameInput.value;
        })
        ticketEmail.textContent = email.value.trim();
        tikcetGithub.textContent = githubInput.value.trim();
        infoForm.style.display = 'none';
        console.log(infoForm.style.display)

        ticket.style.display = 'flex';

    }
    
        
    
})

