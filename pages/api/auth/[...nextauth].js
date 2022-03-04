import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb";
import GithubProvider from "next-auth/providers/github";
//import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";
// import SpotifyProvider from "next-auth/providers/spotify";
// import NetlifyProvider from "next-auth/providers/netlify";
// import LinkedInProvider from "next-auth/providers/linkedin";
// import InstagramProvider from "next-auth/providers/instagram";


export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
     
     GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
   
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    // }),

    // SpotifyProvider({
    //   clientId: process.env.SPOTIFY_CLIENT_ID,
    //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    // }),

    // NetlifyProvider({
    //   clientId: process.env.NETLIFY_CLIENT_ID,
    //   clientSecret: process.env.NETLIFY_CLIENT_SECRET
    // }),
     
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID,
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    // }),
    // InstagramProvider({
    //   clientId: process.env.INSTAGRAM_CLIENT_ID,
    //   clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    // }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD
    //     }
    //   },
    //   from: process.env.EMAIL_FROM
    // }),


  // Providers.Spotify({
  //   clientId: process.env.SPOTIFY_CLIENT_ID,
  //   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  //   profile(profile) {
  //     return {
  //       id: profile.id,
  //       name: profile.display_name,
  //       email: profile.email,
  //       image: profile.images?.[0]?.url
  //     }
  //   },
  // }),

  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
  },
  
})