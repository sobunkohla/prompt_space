import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google' ;
import { connectToDb } from '@utils/database';
import User from '@models/user'

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_ID,
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email
        }) 
       session.user.id = sessionUser.id.toString();

       return session;
    } ,
    async signIn ({ profile}) {
         try {
             await connectToDb();
             // check if user exists 
             const userExists = await User.findOne({ email: profile.email});
           // if not, create a new user

           if(!userExists) {
            await User.create({
                email: profile.email ,
                username : profile.name.replace(" ","").toLowerCase(),
                image : profile.picture
            })
           }
         } catch (error) {
            console.log(error);
            return false;
         }
    }
})


export { handler as GET , handler as POST } ;