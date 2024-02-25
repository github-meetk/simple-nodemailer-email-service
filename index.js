import {mailSender} from "./mailSender.js"


export async function sendEmail(options){
    const { from, password, to, title = '', body='' } = options;

    if(!from){
        console.log(`Sender's email required!!`);
    }
    if(!password){
        console.log(`Sender's email app password required! that you can get from your google account`);
    }
    if(!to){
        console.log(`Receiver's email required!!`);
    }

    try {
        const res = await mailSender(from, password, to, title, body);
        return res;
    } catch (error) {
        console.log(error)
        return
    }

    
}