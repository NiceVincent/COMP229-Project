// Geng Wei, Tu | 301337045
let express = require('express');
//create a reference to the db Schema which is the model
let Video = require('../models/video');

// display the list of contact
module.exports.displayVideoNoteList = (req, res, next) => {
    // Video.find((err, videoNoteList) => {
    //     if (err) {
    //         return console.error(err);
    //     } else {
    //         res.render('videos/list', {
    //             title: 'Videos',
    //             pageName: 'videos/list',
    //             videoNoteList,
    //             displayName: req.user ? req.user.displayName : ''
    //         });
    //     }
    // });
    Video.find()
        .then(data => res.send(data))
        .catch(err => next(err));
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('videos/add', {
        title: 'Add Video Notes',
        pageName: 'videos/add',
        displayName: req.user ? req.user.displayName : ''
    })
}

// For Angular API
module.exports.processAddPage = (req, res, next) => {
    const newVideo = Video({
        "name": req.body.name,
        "videoLink": req.body.videoLink,
        "notes": req.body.notes,
    });

    // Video.create(newVideo, (err, video) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    //         res.redirect('/videos');
    //     }
    // });

    Video.create(newVideo)
        .then(data => res.status(201).json(data))
        .catch(err => next(err));
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    Video.findById(id, (err, videoNoteEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('videos/edit', {
                title: 'Edit Video',
                pageName: 'videos/edit',
                video: videoNoteEdit,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedVideo = Video({
        "_id": id,
        "name": req.body.name,
        "videoLink": req.body.videoLink,
        "notes": req.body.notes,
        "syncStatus": req.body.syncStatus,
    });
    // Video.updateOne({
    //     _id: id
    // }, updatedVideo, (err) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    //         // send event emit
    //         res.redirect('/videos');
    //     }
    // });
    Video.updateOne({_id: id}, updatedVideo)
        .then(data => {
            if (data) res.send(data)
            else res.status(404).json({
                error: 'record not exist'
            })
        })
        .catch(err => next(err));
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    // Video.remove({
    //     _id: id
    // }, (err) => {
    //     if (err) {
    //         console.log(err);
    //         res.end(err);
    //     } else {
    //         res.redirect('/videos');
    //     }
    // });
    Video.remove({_id: id})
        .then(data => {
            if (data) res.send(data)
            else res.status(404).json({
                error: 'record not exist'
            })
        })
        .catch(err => next(err));
}