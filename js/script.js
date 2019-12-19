//We create an async/wait function to fetch the infos of the api
async function fetchEmployees(){
    let results = await fetch(`https://randomuser.me/api/?results=12`);
    return await results.json();
}

fetchEmployees()
    .then(data =>createGallery(data.results));

//function to lunch the gallery of 12 employees
const createGallery = (allEmployees) => {
    allEmployees.map(function(employee, index){
        const newEmployee = new Card(
            employee.picture.large,
            employee.name.first,
            employee.name.last,
            employee.email,
            employee.location.city,
            employee.location.state
        );
        newEmployee.employeesCard(index);

    });
};


