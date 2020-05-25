
export const MONGODB_URI = 'mongodb://admin_rahul:Mpk72&rkm@ds161312.mlab.com:61312/heroku_715np8qn';

if (!MONGODB_URI) {
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}

export const JWT_SECRET = 'secret';

if (!JWT_SECRET) {
    console.log("No JWT secret string. Set JWT_SECRET environment variable.");
    process.exit(1);
}
