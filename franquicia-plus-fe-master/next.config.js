module.exports = {
    async headers() {
      return [
        {
          source: "/images/:path*", // Adjust the path pattern to match your image URLs
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, must-revalidate", // Cache assets for 1 year (adjust as needed)
            },
          ],
        },
      ];
    },
    images: {
      domains: ["imagenesfranquiciaplus.s3.amazonaws.com"],
    },
  };