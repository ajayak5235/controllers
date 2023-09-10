
const products = [];

exports.getAddProducts = (req, res, next) => {
res.render('add-product',{
    pageTitle:'add Product',
    path:'/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
   });
   }
   exports.postAddProduct = (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/')
   }

   exports.getProducts =  (req, res, next) => {
   res.render('shop',{
    prods:products,
    pageTitle: 'shop',
    path: '/',
    hasProducts:products>length > 0,
    activeShop: true,
    productCSS: true
   });
}

exports.contactus = ((req, res, next) => {
    res.render('contactus',{
        
        pageTitle: 'contat Us',
        path: '/',
        activecontact: true,
        contactCSS: true
       });
    
});
