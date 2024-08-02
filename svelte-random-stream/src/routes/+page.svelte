<script lang='ts'>
	// logic goes here

    import skyash from '$lib/assets/skyash.jpg'
    import { onMount } from 'svelte';

    onMount(()=>{
        getData()
    })
    
    let stream:any;
    
    async function getData() {
        stream.innerHTML = "DATA"
    //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    //   fetch(proxyUrl + "https://streams.place/skyash/json/").then(
    //     async (res) => {
    //       const data = await res.json();
    //       const length = data.length - 1;
    //       let randIndex = Math.floor(Math.random() * length);
    //         stream.innerHTML = data[randIndex].text;
    //     }
    //   );
    }
</script>

<!-- markup (zero or more items) goes here -->

<div id="main">
  <span><img src={skyash} alt="skyash" width="72" /></span>
  <a id="stream-link" class="wrap" href="https://streams.place/skyash">
    <span bind:this={stream} id='stream'></span>
  </a>
  <button on:click={getData}>🪄</button>
</div>

<style> 
	/* styles go here */

#main {
  height: 100vh;
  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.wrap {
  width: 80%;
  background: #accbee;
  margin: 32px;
  padding: 50px 25px 50px 25px;
  border-radius: 10px;
  border: 2px white solid;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.wrap:hover {
  padding: 55px 30px 55px 30px;
}
img {
  border-radius: 8px 8px 8px 8px;
}
button {
  min-width: 56px;
  min-height: 56px;
  border: none;
  cursor: pointer;
  font-size: larger;
}
button:hover {
  border: 4px #accbee solid;
}
#stream {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
  letter-spacing: 0.3px;
  color: black;
}
#stream-link {
  text-decoration: none;
}
</style>