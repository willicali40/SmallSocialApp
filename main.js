const form = document.getElementById('form');
const input = document.getElementById('input');
const msg = document.getElementById('msg');
const posts = document.getElementById('posts');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    formValidator();
});

let formValidator = ()=>{
    if(input.value === ''){
        msg.innerHTML = 'Text area can not be blank';
        console.log('err');
    }
    else {
        console.log('success');
        msg.innerHTML = '';
        acceptData();
    }
};

let data = {};

let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};