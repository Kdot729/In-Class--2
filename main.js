function Show_Elements(Section_ID)
{
    console.log(Section_ID)
    document.querySelector(`#${Section_ID} img`).style.display = "grid";
    document.querySelector(`#${Section_ID} .hide-button`).style.display = "grid";
};

function Hide_Elements(Section_ID)
{
    document.querySelector(`#${Section_ID} img`).style.display = "none";
    document.querySelector(`#${Section_ID} .hide-button`).style.display = "none";
};