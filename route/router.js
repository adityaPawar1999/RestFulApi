require('dotenv').config();
const router = require('express').Router();
const FieldTemplate = require('./../model/model');
const bcrypt = require('bcrypt');
const slugify = require('slug');
const authMiddleware = require('./authMiddleware');


// Create  field 
router.post('/fields', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id;

    const slugBase = slugify(req.body.name, { lower: true });
    let slug = slugBase;
    let suffix = 1;
    while (await FieldTemplate.findOne({ user: userId, slug: slug })) {
      slug = `${slugBase}-${suffix}`;
      suffix++;
    }

    const fieldTemplate = new FieldTemplate({
      user: userId,
      ...req.body,
      slug: slug,
    });
    const result = await fieldTemplate.save();
    res.status(200).json(result);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create a field.' });
  }
});


//update feild
router.put('/fields/:id', async (req, res) => {
  const ID = req.params.id; 

  try {
    const existingFieldTemplate = await FieldTemplate.findById(ID);

    if (!existingFieldTemplate) {
      return res.status(404).json({ error: 'Field template not found.' });
    }
    if (req.body.name) {
      existingFieldTemplate.name = req.body.name;

      const slugBase = slugify(req.body.name, { lower: true });
      let slug = slugBase;
      let suffix = 1;

      while (
        await FieldTemplate.findOne({
          user: existingFieldTemplate.user,
          slug: slug,
          _id: { $ne: ID }, 
        })
      ) {
        slug = `${slugBase}-${suffix}`;
        suffix++;
      }
      existingFieldTemplate.slug = slug;
    }
    const updatedFieldTemplate = await existingFieldTemplate.save();
    res.status(200).json(updatedFieldTemplate);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update the field template.' });
  }
});

//show all
router.get('/fields', async (req, res) => {
  try {
    const data = await FieldTemplate.find();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to display field list.' });
  }
});

// specific field
router.get('/fields/:id', async (req, res) => {
  const fieldTemplateId = req.params.id;

  try {
    const fieldTemplate = await FieldTemplate.findById(fieldTemplateId);
    if (!fieldTemplate) {
      return res.status(404).json({ error: 'Field not found.' });
    }
    res.status(200).json(fieldTemplate);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Unable to Find the field.' });
  }
});

// delete field
router.delete('/fields/:id', async (req, res) => {
  const fieldTemplateId = req.params.id; 

  try {
    const existingFieldTemplate = await FieldTemplate.findById(fieldTemplateId);
    if (!existingFieldTemplate) {
      return res.status(404).json({ error: 'Field template not found.' });
    }

    await FieldTemplate.findByIdAndDelete(fieldTemplateId);
    res.status(200).json(existingFieldTemplate);
  
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete the field template.' });
  }
});

module.exports = router;
