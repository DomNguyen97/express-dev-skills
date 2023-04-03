const Skill = require("../models/skills");
module.exports = {
    index,
    show,
    new: newSkill
};

function index(req, res) {
    res.render('skills/index',{
    skills: Skill.getAll(), 
    title: 'All Skills'  
});
}

function show(req, res) {
    res.render ("skills/show", {
      skill: Skill.getOne(req.params.id),
      title: 'Skills Details' 
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skills' });
  }