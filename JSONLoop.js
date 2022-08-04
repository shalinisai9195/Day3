///  Javascript loop through JSON Array
let resume = [{ name : "Thenmozhi L",
Qualification : "BCA",
year_of_Passedout : 2018},
{Address : { P_A : {No :123, street : "Ganapathy stree", city : "chennai", pincode: 600054},
T_A : {No :12, street : "Raagav street", city : "chennai", pincode: 600101}

}},
{Hobbies : "Badminton",
Contect_no : 9845768344}]

console.log(JSON.stringify(resume))

for(let i=0; i < resume.length; i++)
{
    console.log(resume[i]);
}
