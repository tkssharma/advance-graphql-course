const Cat = require('./models/Cat');

const resolvers = {
  Query: {
    cats: async () => {
       return await Cat.find({})
    },
    cat: async (_, {id}) => {
      return await Cat.findById(id)
   },
  },
  Mutation: {
    createCat: async (_, {name}) => {
      const cat = new Cat({name})
      const catData = await cat.save()
      return catData;
    },
    updateCat: async (_, {id, name}) => {
      const cat = await Cat.findById(id);
      cat.name = name;
      const catData = await cat.save()
      return catData;
    },
    deleteCat: async (_, {id}) => {
      await Cat.findByIdAndRemove(id);
      return true;
    }
  }
}
module.exports = resolvers;
