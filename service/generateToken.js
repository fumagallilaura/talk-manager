// https://thewebdev.info/2021/10/13/how-to-create-a-random-token-in-javascript/#:~:text=To%20create%20a%20random%20token%20in%20JavaScript%2C%20we%20can%20use,()%20%3D%3E%20%7B%20return%20Math.
const rand = () => Math.random().toString(36).substring(2, 10);

const generateToken = () => ({ token: rand() + rand() });

module.exports = generateToken;