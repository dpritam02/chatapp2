import User from "../models/usersign-model";

export const signup = (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    try {
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password not match" });
        }
        const user = User.findOne({ email })
        if (user) {
            return res.status(400).json({ error: "user already exist" });
        }
        const newUser = new User({
            fullname,
            email,
            password
        })
        newUser.save();
        res.status(201).json({ error: "user created successfully!" });
    } catch (error) {
        console.log(err);
        res.status(500).json({ error: "Something went wrong from our end...Please try Again" });
    }
}
