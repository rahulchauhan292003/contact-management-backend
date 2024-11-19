const contactModel = require("../model/contact");

exports.createContact = async (req, res) => {
  try {
    const user = new contactModel(req.body);
    await user.save();
    return res.status(200).send("created");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.readContact = async (req, res) => {
  try {
    const user = await contactModel.find();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const user = await contactModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("delete success");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.editContact =async (req, res) => {
  try {
    const user =await contactModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(user)
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

 exports.readContactbyid = async (req, res) => {
    const { id } = req.params; 
  
    try {
      const contact = await contactModel.findById(id); 
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };