import { User } from '../models/user.js';

const signupController = {
    index(req, res) {
        res.render('signup')
    },

    async signup(req, res) {
        const { email, password, confirm } = req.body
        const user = { email, password, confirm }
        
        await User.create({
            email,
            password,
        })

        res.redirect('/forecast')
        
    }
};

export { signupController }