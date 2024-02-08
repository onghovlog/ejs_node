const express=require('express')
const app=express()
const path=require('path')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.set('partials', path.join(app.get('views'), 'partials'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    title="Wecome to Engine EJS"
    content="Đây là trang chủ: Engine EJS in Node JS"
    res.render('index',{title,content})
})
app.get('/about',(req,res)=>{
    title="Who are Engine EJS?"
    content="About me: Engine EJS in Node JS"
    res.render('about',{title,content})
})
app.get('/product',(req,res)=>{
    title="Product - Engine EJS"
    content="Danh sách sản phẩm"
    let products=[{
        "id": 1,
        "name": "Sản phẩm 1",
        "img": "hinh1.webp",
        "price": 100
    },{
        "id": 2,
        "name": "Sản phẩm 2",
        "img": "hinh2.webp",
        "price": 200
    },{
        "id": 3,
        "name": "Sản phẩm 3",
        "img": "hinh3.webp",
        "price": 300
    },{
        "id": 4,
        "name": "Sản phẩm 4",
        "img": "hinh4.webp",
        "price": 400
    },{
        "id": 5,
        "name": "Sản phẩm 5",
        "img": "hinh5.webp",
        "price": 500
    },{
        "id": 6,
        "name": "Sản phẩm 6",
        "img": "hinh6.webp",
        "price": 600
    }]
    res.render('product',{title,content,products})
})

const PORT=process.env.PORT ||3000
app.listen(PORT, ()=>{
    console.log(`Đã start server http:\\localhost:${PORT}`)
})