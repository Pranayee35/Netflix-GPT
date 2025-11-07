const checkvaliddata = (email,password) => {
    const isemailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const ispasswordvalid = /^.*(?=.{7,50})(?=.*\d)(?=.*[A-Z]).*$/.test(password);
    //const isvalidname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(nam);
 if(!isemailvalid) return "Email Id is not valid";
 if(!ispasswordvalid) return "Password is not valid";
 //if(!isvalidname) return "Full name is not valid"
 return null;
}
export default checkvaliddata;