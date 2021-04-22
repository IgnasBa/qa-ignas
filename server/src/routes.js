module.exports = (questionDB) => {
  const express = require("express");
  const router = express.Router();

  /**** Routes ****/
  router.get('/', async (req, res) => {
    const questions = await questionDB.getQuestions(); 
    res.json(questions);
  });

  router.get('/:id', async (req, res) => {
    const question = await questionDB.getQuestion(req.params.id);
    res.json(question);
    console.log(req.params.id);
  });

  router.post('/', async (req, res) => {
    const newQuestion = await questionDB.createQuestion(req.body.title, req.body.text);

    res.json(newQuestion);
  });

  router.put('/answer/:id', async (req, res) => {
 await questionDB.createAnswer(req.params.id, req.body.answer)
    res.json(req.params);
       }
       
      );

      router.put('/answer/:id/upvote/:answerid', async (req, res) => {
        await questionDB.upvote(req.params.id, req.params.answerid)
              }
              
             );
             router.put('/answer/:id/downvote/:answerid', async (req, res) => {
              await questionDB.downvote(req.params.id, req.params.answerid)
                    }
                    
                   );
       




  return router;
}
