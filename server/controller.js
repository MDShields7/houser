module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log('controller.js, getAll method')
        dbInstance.get_houses()
        .then(houses => res.status(200).send(houses))
        .catch(error => {
            res.status(500).send('getAll method attempt', error)
        })
        // console.log('houses',houses)
    },
    // put: (req, res, next) => {
        
    // },
    post: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, price, image_url} = req.body;
        console.log('controller.js, post method')
        dbInstance.post_house([name, address, city, state, price, image_url])
        .then( () => res.status(200))
        .catch(error => {
            res.status(500).send('post method attempt', error)
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log('controller.js, delete method')
        const {id} = req.params;
        dbInstance.delete_house(id)
        .then( () => res.status(200))
        .catch(error => {
            res.status(500).send('delete method attempt', error)
        })
    },


}