  // *** VSH tasks *** // ## //
        // *** //    //*** // */

const users = [
    {
      id: 2,
      name: "Jonathon Haley",
      username: "Monte.Weber2",
      email: "Daphne43@yahoo.com",
      phone: "1-563-675-1857 x11708",
      website: "carmela.net",
      password: "hashed_password",
      ages: 34
    },
    {
      id: 3,
      name: "Dean John",
      username: "dd.1",
      email: "deno@google.com",
      phone: "1-123-543-1857 123212",
      website: "dd.net",
      password: "Dean_hashed_password",
      ages: 23
    }
  ];
  
  // Q1. Add a new record at the end of the array using the spread operator.
  function addLast(users, temp) {
    const updatedUsers = [...users, temp];
    return updatedUsers;
  }
  
  // Q2. Add a new record at the beginning of the array using the spread operator.
  function addFirst(users, temp) {
    const updatedUsers = [temp, ...users];
    return updatedUsers;
  }
  
  // Q3. Display all records with only 3 fields: id, name, username.
  function display(users) {
    const displayedRecords = users.map(user => ({
      id: user.id,
      name: user.name,
      username: user.username
    }));
    console.log(displayedRecords);
  }
  
  // Q4. Display all records with name === 'demon'.
  function findNameEquals(users) {
    const filteredRecords = users.filter(user => user.name === 'demon');
    console.log(filteredRecords);
  }
  
  // Q5. Display all records starting with a specific character.
  function findSpecificStartChar(users, startChar) {
    const filteredRecords = users.filter(user => user.name.startsWith(startChar));
    console.log(filteredRecords);
  }
  
  // Q6. Display the sum of all ages.
  function findSumAges(users) {
    const sumAges = users.reduce((total, user) => total + user.ages, 0);
    console.log(`Sum of Ages: ${sumAges}`);
  }
  
  // Q7. Display all records with only name & ages.
  function findAll(users) {
    const selectedFields = users.map(user => ({
      name: user.name,
      ages: user.ages
    }));
    console.log(selectedFields);
  }
  
  // Q8. Display the sum of all ages of records having names starting with 'J'.
  function sumAgesWithJ(users) {
    const filteredRecords = users.filter(user => user.name.startsWith('J'));
    const sumAges = filteredRecords.reduce((total, user) => total + user.ages, 0);
    console.log(`Sum of Ages for Names Starting with 'J': ${sumAges}`);
  }
  
  // Q9. Display all records sorted according to names.
  function Sorting(data, order) {
    const sortedData = [...data].sort((a, b) => {
      if (order === 'ASC') {
        return a.name.localeCompare(b.name);
      } else if (order === 'DESC') {
        return b.name.localeCompare(a.name);
      } else {
        return 0;
      }
    });
    console.log(sortedData);
  }
  
  // Q10. Delete an object at a specific array index.
  function deleteRecord(users, index) {
    if (index >= 0 && index < users.length) {
      users.splice(index, 1);
    }
  }
  
  // Q11. Insert an object at a specific array index.
  function insertRecord(users, temp, index) {
    if (index >= 0 && index <= users.length) {
      users.splice(index, 0, temp);
    }
  }
  
  // Example usage of the functions
  const newUser = {
    id: 4,
    name: "Eva Smith",
    username: "eva_smith",
    ages: 28
  };
  
  const updatedUsers1 = addLast(users, newUser);
  const updatedUsers2 = addFirst(updatedUsers1, newUser);
  
  display(updatedUsers2);
  findNameEquals(updatedUsers2);
  findSpecificStartChar(updatedUsers2, 'B');
  findSumAges(updatedUsers2);
  findAll(updatedUsers2);
  sumAgesWithJ(updatedUsers2);
  Sorting(updatedUsers2, 'ASC');
  
  deleteRecord(updatedUsers2, 2); 
  insertRecord(updatedUsers2, newUser, 1); 
  
  console.log(updatedUsers2);
  