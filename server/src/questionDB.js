module.exports = (mongoose) => {
  const questionSchema = new mongoose.Schema({
    title: String,
    text: String,
    answers: [{answer: String,
               rating: Number}]
  });

  const questionModel = mongoose.model('question', questionSchema);
  module.exports = questionModel;

  async function getQuestions() {
    try {
      return await questionModel.find();
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
    }
  }

  async function getQuestion(id) {
    try {
      return await questionModel.findById(id);
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
    }
  }

  async function createQuestion(title, text) {
    let question = new questionModel({title: title, text: text});
    return question.save();
  }

  async function createAnswer(id, answerNew) {
    try {
      return await questionModel.findByIdAndUpdate(id, {$push: {answers: {answer: answerNew, rating: 0}}})
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
      
    }
          
  }
  async function upvote(id, answerid) {
    try {
      return await questionModel.findOneAndUpdate({'_id': id, 'answers._id': answerid}, {$inc: {'answers.$.rating': 1}})
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
      
    }
          
  }
  async function downvote(id, answerid) {
    try {
      return await questionModel.findOneAndUpdate({'_id': id, 'answers._id': answerid}, {$inc: {'answers.$.rating': -1}})
    } catch (error) {
      console.error("getQuestion:", error.message);
      return {};
      
    }
          
  }

  async function bootstrap(count = 12) {
    let l = (await getQuestions()).length;
    console.log("Question collection size:", l);

    if (l === 0) {
      let promises = [];
      for (let i = 0; i < count; i++) {
        let newQuestion = new questionModel({title: `Question number ${i}`,text: 'What is the question number?', answers: {answer: 'I am not exactly sure, if I would have to guess it would be 11 or 13 because why not afterall?', rating: 0}});
        promises.push(newQuestion.save());
      }
      return Promise.all(promises);
    }
  }

  return {
    getQuestions,
    getQuestion,
    createQuestion,
    bootstrap,
    createAnswer,
    upvote,
    downvote
  }
}
