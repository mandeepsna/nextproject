/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.pexels.com','images.unsplash.com']
    },
    redirects:async()=>
    {
        return [
              {
                  source:'/redirect',
                  destination:'https://www.google.com/',
                  permanent:false
              },
            //   {
            //     source:'/dynamicrouting/:id',
            //     // destination:'https://www.google.com/',
            //     permanent:false
            // }
        ]
    }
}

module.exports = nextConfig
