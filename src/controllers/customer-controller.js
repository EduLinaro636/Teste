const neDB = require('../configurations/database')
const api = {}

api.findAll = (request, response) => {
    neDB.find({}).sort({name:-1}).exec((exception,data)=>{
        if(exception){
            console.log("Houve um erro ao consultar determinado customer");
        }else{
            response.json(data);
            response.status(200);
        }
    })

}

api.save= (request, response) => {
    const canonico = request.body;

    neDB.insert(canonico,function(exception,customer){
        if(exception){
            console.log("Houve um erro ao inserir seus dados: ",exception);
        }else{
            response.status(201)
            response.json(customer)
            
        }

    });
}

module.exports = api