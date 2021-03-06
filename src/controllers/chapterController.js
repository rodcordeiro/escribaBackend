const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        await connection('chapters')
            .select('*')
            .then(response=>{
                return res.json(response)
            })
            .catch(err=>{
                return res.json(err.message)
            });
    },
    async create(req, res){
        const { title, text } = req.body;
        const author = req.headers.id;
        await connection('chapters')
            .insert({ title, text, author })
            .then(response=>{
                return res.json({action:"create",chapter:{title}});
            })        
    },
    async update(req, res){
        const { id } = req.params;
        const { title, text, author} = req.body;
        await connection('chapters')
            .where({id})
            .update({ title, text, author})
            .then(response=>{
                return res.status(200).json({action:"update",chapter:{id,title}})
            })
            .catch(err=>{
                return res.status(err.statusCode).json(err.message)
            })
    },
    async delete(req, res){
        const { id } = req.params;
        await connection('chapters')
            .where({id})
            .delete()
            .then(response=>{
                return res.status(204).send();
            })
            .catch(err=>{
                return res.status(err.statusCode).json(err.message)
            })
    },
    async search(req, res){
        const { id } = req.params;
        await connection('chapters')
            .select('*')
            .where({id})
            .first()
            .then(response=>{
                return res.json(response)
            })
            .catch(err=>{
                return res.json(err.message)
            });
    },
    
}