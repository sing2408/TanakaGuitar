function validate() {
    const form = document.forms['memberregis'];
    const name = form['name'].value;
    const email = form['email'].value;
    const gender = form['gender'].value;
    const age = form['age'].value;
    const address = form['address'].value;
    const news = form['news'].checked;
    let msg = ''
    if(!name) {
        msg = "Please fill in your name!"
    }
    else if(name.length < 5) {
        msg = "Name must be minimum 5 characters!"
    }
    else if(!email) {
        msg = "Please fill in your email!"
    }
    else if(gender != 'male' && gender != 'female') {
        msg = "Please choose your gender!"
    }
    else if(!age) {
        msg = "Please fill in your age!"
    }
    else if(age < 18) {
        msg = "Age must be minimum 18!"
    }
    else if(!address) {
        msg = "Please fill in your address!"
    }
    else if(address.length < 10) {
        msg = "Address must be minimum 10 characters!"
    }
    if(msg) {
        document.getElementById('errormsg').innerHTML = msg
        return false;
    }
    else {
        let konfirmasi = confirm("Are you sure you want to submit?")
        if(konfirmasi) {
            alert("Submission complete!")
        }
        else {
            return false;
        }
    }
}