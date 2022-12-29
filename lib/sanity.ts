import sanityClient from '@sanity/client'

// See the image above on how to get your projectId and add a new API token
// I added one called "landing page"
const client = sanityClient({
    projectId: 'q7kwgz1v',
    dataset: 'production',
    token: 'sk0Tr4GiUSfB3ocVmbYE8Kc744YNsd6LefPKvct78YuJNNUZCJKIyg3gxFsSieId8uze4jztBWmEBvgr4m37xZaNw9wBtOoEf7d5uE8azPRphR2PIizp5No7qgd0CYAmePHu3XJCV52fxavfX7vk3GZlsg5Cx1gCk1oQBsWxwTSBwUNiP3MY', // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
    ignoreBrowserTokenWarning: true,
  });
  
  export default client;
  
