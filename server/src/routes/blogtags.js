import { Router } from 'express';
import { rows } from '../config/db';
let router = Router();


router.get('/:id', async (req, res) => {
    let id= req.params.id;
    try {

        let results = await rows('spBlogTags',[id]);
        res.json(await results);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;