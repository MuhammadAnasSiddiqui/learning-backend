const express = require('express')
const router = require('./route/route')
const app = express()
const port = 3000

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/" , (req,res) => {
//     res.json({message: "SERVER UP"})
// })

app.use("/", (req, res, next) => {
    console.log('request agai...', req.query.apikey);
    if (req.query.apikey == "123") {
        next()
    } else {
        res.status(401).json({ message: "user not allow" })
    }
})

app.use("/api", router)

// app.use((req, res, next) => {
//     console.log("working middleWare");

//     const user = true;

//     if (user) {
//         next()

//     }
//     else {
//         res.json({ message: "user not login" })
//     }

// })

// const middleWare = (req, res, next) => {

//     const userAuth = true;

//     if (userAuth) {
//         next()

//     } else {
//         res.json({ message: "User Not Login" })
//     }
// }


// app.get("/user", (req, res) => {

//     console.log("query", req.query);
//     console.log(Object.keys(req.query).length)

//     if (Object.keys(req.query).length) {
//         res.json({
//             message: "successfully get",
//             status: true,
//             data: ["Single USER DATA"],
//         });
//         return
//     }
//     res.json({
//         message: "successfully get",
//         status: true,
//         data: ["ALL USERS DATA"],
//     });
// });

// app.post("/userCreate", [middleWare], (req, res) => {
//     console.log("req---", req.body);
//     res.json({
//         message: "successfully user create",
//         status: true,
//     });
// })

// const obj = [
//     {
//         id: 1,
//         name: "anas",
//         email: "anas@gmail.com"
//     },
//     {
//         id: 2,
//         name: "ahmed",
//         email: "ahmed@gmail.com"
//     },
// ]
// app.get("/", (req, res) => {
//     rse.json({
//         message: "SERVER UP",
//     });
// });

// app.get('/usersApi', (req, res) => {
//     res.send(obj)
// });

// app.post('/usersApi', (req, res) => {
//     obj.push({ id: obj.length + 1, ...req.body });
//     res.send({ message: "user added" })
// });

// app.delete('/usersApi/:id', (req, res) => {
//     let index = obj.findIndex(v => v.id === Number(req.params.id));
//     obj.splice(index, 1)
//     res.send({ message: "user delete" })
// });

// app.put('/usersApi/:id', (req, res) => {
//     // console.log(req.params)
//     let index = obj.findIndex(v => v.id === Number(req.params.id));
//     obj.splice(index, 1, { id: req.params.id, ...req.body })
//     res.send({ message: "user edit" })
// });


// app.get('/', (req, res) => {
//     res.send('HOME PAGE')
// });



// app.get('/about', (req, res) => {
//     res.send('ABOUT PAGE')
// });

// app.get('/contact', (req, res) => {
//     res.send('CONTACT PAGE')
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})