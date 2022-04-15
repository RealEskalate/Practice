import { NextFunction, Request, Response } from 'express'
import Rating, { IRating } from '../models/ratings'

export const createRating = async (
    req: Request, 
    res: Response, 
    _next: NextFunction
    ) => {
    const {articleId} = req.params
    const {userId, value} = req.body // we can also get user id from jwt
    const date: Date = new Date();
    const rating = new Rating({
        articleId,
        userId,
        value,
        date
    })
    try {
        const ratingExists = await Rating.findOne({articleId, userId})
        if (ratingExists) {
            return res.status(409).json({
                message: `User has already rated this article`
            })
        }
        const newRating = await rating.save()
        res.status(201).json({data: newRating})
    } catch (e) {
        res.status(400).end()
    }
}

export const updateRating =async (
    req: Request,
    res: Response,
    _next: NextFunction
    ) => {
    const {articleId} = req.params
    const {userId, value} = req.body

    try {
        const rating = await Rating.findOne({articleId, userId})
        if (!rating) {
            return res.status(404).json({
                message: `User has not rated this article before`
            })
        }
        if (value) {
            rating.value = value
        }

        await rating.save()
        return res.status(201).json({data: rating})
    } catch (e) {
        return res.status(400).end()
    }
}

export const deleteRating = async (
    req: Request,
    res: Response,
    _next: NextFunction
    ) => {
    const {articleId} = req.params
    const {userId} = req.body

    try {
        const rating = await Rating.findOneAndDelete({articleId, userId})
        if (!rating) {
            return res.status(404).json({
                message: `Rating doesn't exist`
            })
        }
        return res.status(201).json({message: 'Rating deleted successfully'})
    } catch (e) {
        return res.status(400).end()
    }
}

export const getRating = async (
    req: Request,
    res: Response,
    _next: NextFunction
    ) => {
    const {articleId} = req.params
    
    try {
        const avgRating = await Rating.aggregate(
            [
                {
                    "$match": {"articleId": articleId}
                },
                {
                    "$group" : {
                        "_id": articleId,
                        "averageRating": {
                            "$avg" : "$value"
                        }
                    }
                }
            ]
        )
        
        if (avgRating.length == 0) {
            return res.status(200).json(
                {
                    "_id": articleId, 
                    "averageRating": 0
                })
        }
        return res.status(200).json(avgRating[0])
    } catch (e) {
        return res.status(400).end()
    }
}
