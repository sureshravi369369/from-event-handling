const formEl=document.forms.feedback;

// const fullName=document.elements.fullname; // by elements in name:
// const typeEl=document.elements.type;
// const emailEl=document.elements.email;
// const desEl=document.elements.description;
// const termsEl=document.elements.terms;

// Object Destructing  method:2

// const {fullName,type,email,description,terms}=formEl.elements

const handleSubmit=(e)=>{
    e.preventDefault();
  console.log(...new FormData(formEl));  
}



formEl.addEventListener("submit",handleSubmit)