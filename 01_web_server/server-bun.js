import {serve} from 'bun'

serve({
    fetch(request){
 const url = new URL(request.url)
  if(url.pathname === '/'){
   return new Response('hello',{status : 200})
  }else if(url.pathname === '/about'){
   return new Response('about',{status : 200})
  }else{
    return new Response('404', {status:404})
  }
    },

    port: 300,
    hostname:'127.0.0.1',
})

