import { checkCategoryCodeProp } from '../helpers/categoryCodes.js';
import Category from '../models/Category.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    let category = req.body;
    category = checkCategoryCodeProp(category)

    const newCategory = new Category(category);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    let category = req.body;
    const id = req.params.id;
    category = checkCategoryCodeProp(category)

    const updatedCategory = await Category.findByIdAndUpdate(id, category, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCategory = await Category.findByIdAndRemove(id);
    if (!deletedCategory) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
