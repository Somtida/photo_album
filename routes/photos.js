'use strict';

const express = require('express');
let Photo = require('../models/photo');


let router = express.Router();



router.route('/')
  .get((req, res)=>{
    Photo.find({},(err, photos)=>{
      res.status(err ? 400 : 200).send(err || photos);
    });
  })
  .post((req, res)=>{
    Photo.create(req.body, (err)=>{
      res.status(err ? 400 : 200).send(err);
    });
  })
  .delete((req, res)=>{
    Photo.remove({},(err)=>{
      res.status(err ? 400 : 200).send(err);

    });
  })


// DELETE /api/photos/:id

router.route('/:id')
  .get((req,res)=>{
    Photo.findById(req.params.id, (err,photo)=>{
      res.status(err ? 400:200).send(err || photo);
    });
  })
  .delete((req,res)=>{
    Photo.findByIdAndRemove(req.params.id,err=>{
      res.status(err ? 400: 200).send(err);
    });
  })


  // .put((req,res)=>{
  //   Photo.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, savedDoc)=>{
  //     res.status(err ? 400: 200).send((err || savedDoc));
  //   });
  // })

module.exports = router;
