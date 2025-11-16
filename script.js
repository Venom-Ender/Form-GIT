function validate()
{
    let form=document.forms["form"]
    let password=form["password"].value
    let password2=form["password2"].value
    if(password!=password2)
    {
        alert("Passwords are not the same!")
        return false
    }
    return true
}