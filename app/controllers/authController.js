import { User } from '../models/user.js'

const authController = {
    showForm(req, res) {
        res.render('login')
    },

    async login(req, res) {
        const { email, password } = req.body
        console.log(email, password);

        const userToCheck = await User.findOne({
            where: {
                email: email
            }
        })
        console.log(userToCheck);

        if(userToCheck) {
            if(userToCheck.password === password) {
                res.redirect('/forecast')
            } else {
                console.log('mot de passe incorrect');
            }
        }
    }

}

export { authController }