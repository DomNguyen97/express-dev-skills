const skills = [
    {id: 125223, skill: 'Learn Coding', done: true},
    {id: 127904, skill: 'Learn Express', done: false},
    {id: 139608, skill: 'Learn Mongoose', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id ===id);
}