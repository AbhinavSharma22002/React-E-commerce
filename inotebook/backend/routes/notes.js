const express = require("express");
const fetchuser = require("../middleware/Fetchuser");
const router = express.Router();
const Notes = require("../models/Notes");
const Data = require("../models/Data");
const { body, validationResult } = require("express-validator");

//Route 1:  Get all the notes login require
router.get("/fetchallNotes", fetchuser, async (req, res) => {
    try{
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send('INTERNAL SERVER ERROR 1');
    }
});

//Route 2:  Add a new note login require
router.post(
  "/addNote",
  fetchuser,
  // [
  //   body("title", "Enter a valid title").isLength({ min: 3 }),
  //   body("description", "Enter a valid description").isLength({ min: 7 }),
  // ],
  async (req, res) => {
    //If there are errors, return bad request
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    try {
      const { image,name,category, price} = req.body;

      const note = {
        image,
        name,
        category,
        price,
        user: req.user.id,
      };
      const savedNote = await Notes.create(note);
      const notes = await Notes.find({ user: req.user.id });
      res.json(notes);

    } catch (error) {
        console.log(error.message);
      res.status(500).send("INTERNAL SERVER ERROR");
    }
  }
);


//Route 3:  Update an existing note
router.put('/updatenotes/:id',fetchuser, async (req,res)=>{
const {title,description,tag} = req.body;

//creation a newNote object
const newNote = {};
if(title){
    newNote.title = title;
}
if(description){
    newNote.description = description;
}
if(tag){
    newNote.tag = tag;
}

//find the note to be updated

let note = await Notes.findById(req.params.id);

if(!note){
   return res.status(404).send("NOT FOUND");
}

if(note.user.toString() !== req.user.id){
    return res.status(401).send("Unauthorized access");
}

note = await Notes.findByIdAndUpdate(req.params.id,{$set: newNote},{new:true});
res.json({note});
});

//Route 4:  Delete a note
router.delete('/deleteNote/:id',fetchuser, async (req,res)=>{
    let note = await Notes.findById(req.params.id);

    if(!note){
        return res.status(404).send("NOT FOUND");
     }
     
     if(note.user.toString() !== req.user.id){
         return res.status(401).send("Unauthorized access");
     }
     note = await Notes.findByIdAndDelete(req.params.id);
     res.json({"success":"note has been deleted"});
});

//Route 5: Data

router.get('/Data',async(req,res)=>{
  try{
    const notes = await Data.find();
    res.json(notes);
}
catch(error){
    console.log(error.message);
    res.status(500).send('INTERNAL SERVER ERROR 1');
}
});

module.exports = router;
