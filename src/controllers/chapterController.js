const connection = require('../database/connection');

module.exports = {
    async index(req, res){
        const chapters = await connection('chapters')
            .select('*')
            .then(chapters=>{
                return res.json(chapters)
            })
            .catch(err=>{
                return res.json(err.message)
            });

        return res.json({action:"create",chapter:{id,title}})
    },
    async create(req, res){
        const { title, text } = req.body;
        const [id] = await connection('chapters').insert({ title, text })

        return res.json({chapter:{id,title}});
    },
    async update(req, res){
        const { id } = req.params;
        const { title, text } = req.body;
        await connection('chapters')
            .where({id})
            .update({ title, text })
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
    }
}