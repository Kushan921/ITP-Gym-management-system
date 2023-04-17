const router = require("express").Router();
const { request } = require("express");
let  Payment = require("../models/paymentModel")


//add payment
//http://localhost:8020/payment/add
router.route("/add").post((req,res)=>{
    const Id = req.body.Id;
    const Name = req.body.Name;
    const PhoneNumber = req.body.PhoneNumber;
    const CardNumber = req.body.CardNumber;
    const CVV = req.body.CVV;
    const ExpiaryDate = req.body.ExpiaryDate;
    const TotlePrice = req.body.TotlePrice;


    const newPayment = new Payment({
        Id,
        Name,
        PhoneNumber,
        CardNumber,
        CVV,
        ExpiaryDate,
        TotlePrice,

    })

    newPayment.save().then(()=>{
        res.json("Payment Added Successfully")
    }).catch((err)=>{
        console.log(err);
    })
})

//fetch payemnt
//http://localhost:8020/payment/
router.route("/").get((req,res)=>{
    Payment.find().then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err)
    })
})

//update payment
//http://localhost:8090/payment/update/:id
router.route("/update/:id").put(async (req,res)=>{
    let paymentId = req.params.id;
    const {Id,Name ,PhoneNumber,CardNumber,CVV,ExpiaryDate,TotlePrice} = req.body;

    const updatePayment = {
        Id,
        Name,
        PhoneNumber,
        CardNumber,
        CVV,
        ExpiaryDate,
        TotlePrice,

    }

    const update = await Payment.findByIdAndUpdate(paymentId,updatePayment).then(()=>{
        res.status(200).send({status: "Item Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//Updateone
router.route("/updateOne/:id").put(async (req, res) => {
    let payment = await Payment.findById(req.params.id);
    const data = {
        Id: req.body.Id || payment.Id,
        Name: req.body.Name || payment.Name,
        PhoneNumber: req.body.PhoneNumber || payment.PhoneNumber,
        CardNumber: req.body.CardNumber || payment.CardNumber,
        CVV: req.body.CVV || payment.CVV,
        ExpiaryDate: req.body.ExpiaryDate || payment.ExpiaryDate,
        TotlePrice: req.body.TotlePrice || payment.TotlePrice

    };
    payment = await Payment.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(payment);
});

//delete item
//http://localhost:8020/payment/delete/:id
router.route("/delete/:id").delete(async (req, res)=>{
    let PaymentId = req.params.id;

    await Payment.findByIdAndDelete(PaymentId).then(()=>{
        res.status(200).send({status: "Payment deleted"});
    }).catch((err)=>{
        console.log(err);
    })
})

//get one of the Item
//http://localhost:8020/payment/get/:id
router.route("/get/:id").get((req,res)=>{
    let id = req.params.id;
    Payment.findById(id).then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err);
    })
})


module.exports = router;