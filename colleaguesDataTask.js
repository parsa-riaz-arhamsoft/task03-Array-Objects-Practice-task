const colleagues=[
    {
        "name":"Taha",
        "email":"taha@gmail.com",
        "DOB":"11-3-1996",
        "experience":4,
        "department":"android development",
        "joining":"1-10-2019"
    },
     {
        "name":"Saba",
        "email":"saba@gmail.com",
        "DOB":"10-4-1990",
        "experience":2,
        "department":"web development",
        "joining":"1-5-2020"
    },
     {
        "name":"Mutayab",
        "email":"mutayab@gmail.com",
        "DOB":"5-6-1998",
        "experience":1,
        "department":"blockchain development",
        "joining":"9-10-2022"
    }
    ,
     {
        "name":"Nusrat",
        "email":"nusrat@gmail.com",
        "DOB":"11-3-1990",
        "experience":5,
        "department":"quality assurance",
        "joining":"4-11-2018"
    },
     {
        "name":"Wahaj",
        "email":"wahaj@gmail.com",
        "DOB":"10-3-1994",
        "experience":8,
        "department":"ios development",
        "joining":"1-10-2015"
    }
    ]
    
//sorting colleagues in desending order based on experience    
colleagues.sort((a,b)=> b.experience-a.experience)

//printing the names and experiences of the colleagues
colleagues.forEach((colleague)=>{
    console.log(`name: ${colleague.name} , experience: ${colleague.experience} years`)
})
//deleting colleagues which have experience greater then 2 years
let filteredColleagues=colleagues.filter((colleague) => colleague.experience<=2)
console.log(filteredColleagues)
