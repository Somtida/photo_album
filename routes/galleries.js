'use strict';

const express = require('express');
let Gallery = require('../models/gallery');


let router = express.Router();



router.route('/')
  .get((req, res)=>{
    Gallery.find({})
    .populate('photos')
    .exec(res.handler)
    // Gallery.find({},(err, galleries)=>{
    //   res.status(err ? 400 : 200).send(err || galleries);
    // }
  })
  .post((req, res)=> {
    Gallery.create(req.body, (err)=>{
      res.status(err ? 400 : 200).send(err);
    });
  })
  .delete((req, res)=>{
    Gallery.remove({},(err)=>{
      res.status(err ? 400 : 200).send(err);

    });

  })

  // / PUT /api/galleries/addPhoto/4987554894/7547942734838
router.put('/addPhoto/:galleriesId',(req,res)=>{

  Gallery.findById(req.params.galleriesId, (err, galleries)=>{
    if(err || !galleries) return res.status(400).send(err || {error: 'Gallery not found'});

    let image = {
      url : req.body.url
    }
    galleries.photos.push(image);
    galleries.save((err, savedGallery)=>{
      res.status(err ? 400 : 200).send(err || savedGallery);
    })
  })
})

// DELETE /api/galleries/:id

router.route('/:id')
  .get((req,res)=> Gallery.findById(req.params.id, res.handler))
  // .delete((req,res)=> Gallery.findByIdAndRemove(req.params.id,res.handler))
  .delete((req,res)=> Gallery.findByIdAndRemove(req.params.id,res.handler))

  .put((req,res)=> Gallery.findByIdAndUpdate(req.params.id, req.body, {new: true},res.handler));


// DELETE /api/galleries/:id/:photoId

  router.delete('/deletePhoto/:galleriesId/:photoId',(req,res)=>{

    Gallery.findById((req.params.galleriesId), (err, galleries)=>{
      if(err || !galleries) return res.status(400).send(err || {error: 'Album not found'});
      console.log("galleries.photos: ", galleries.photos);


      galleries.photos.id(req.params.photoId).remove();

      console.log("after galleries.photos: ", galleries.photos);
      galleries.save((err)=>{
        res.status(err ? 400 : 200).send(err);
      })
    })

  })

module.exports = router;
