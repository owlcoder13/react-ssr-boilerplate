import { Router } from 'express'

var apiRoutes = Router();

apiRoutes.get('/api/list', function (req, res) {
    res.json({
        'items': [
            { id: 1, text: 'task1' },
            { id: 2, text: 'task2' }
        ]
    })
})

export default apiRoutes