export const validate = (email,password) => {

    const isEmailValid =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)
    const isPasswordValid =  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
  
    if(!isEmailValid) return "Invalid Email"

    if(!isPasswordValid) return "Invalid Password"

    return null
}

export const validateName = (fullName,email,password) => {
    const isFullNameValid = /^[a-zA-Z\\s]*$/.test(fullName)
    if(!isFullNameValid) return "Invalid Full Name"
    const res = validate(email,password)
    if(res == null) return null
    else return res
    
}