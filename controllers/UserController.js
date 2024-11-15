
exports.users = async(req, res) => {
    try {
        res.render('cadastro')
    } catch (error) {
     console.log(error);   
    }
}

