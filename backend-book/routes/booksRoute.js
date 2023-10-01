import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

//api for create new book
router.post('/', async (req, res) => {
    try {
      if (
        !req.body.title ||
        !req.body.author ||
        !req.body.imageUrl ||
        !req.body.publishYear 
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        imageUrl: req.body.imageUrl,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return res.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

// Route for Get All Books from database
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for Get single Book from database
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//api for update book
  router.put('/:id', async (req, res)=>{
    try{
      if(
        !req.body.title ||
        !req.body.author ||
        !req.body.imageUrl ||
        !req.body.publishYear
      )
      {
        return res.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
      const {id} = req.params;
      const result = await Book.findByIdAndUpdate(id, req.body);
      if(!result)
      {
        return res.status(400).send({message: 'Book not found'});
      }
      return res.status(200).send({message: 'Book updated successfully'});
    }
    catch(error){
      console.log(error.message);
      res.status(500).send({message: error.message});
    }
  });

  // Route for delete single Book from database
router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const book = await Book.findByIdAndDelete(id);

    return res.status(200).json({"Deleted": "Success"});
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

  export default router;