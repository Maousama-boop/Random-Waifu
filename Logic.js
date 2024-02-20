   let menu = document.getElementById("menu");
   let list = document.querySelector(".bar-content");
   let closeMenu = document.getElementById("close");
 
  menu.onclick = () => {
    list.classList.toggle("active");
  };
  closeMenu.onclick = () => {
    list.classList.toggle("active");
  };
  let pilihBrok = document.querySelector(".pilih");
  
 pilihBrok.onclick = () => {
    toast.classList.add("active");
    setTimeout(function(){
      toast.classList.remove("active");
    }, 3500);
 };

 document.addEventListener('click', function(event) {
    var menu = document.querySelector('.bar-content');
    var menuButton = document.getElementById('menu');
    if (!menu.contains(event.target) && event.target !== menuButton) {
      menu.classList.remove('active');
    }
  });

  const r1 = document.getElementById("r1");
  const r2 = document.getElementById("r2");
  const r3 = document.getElementById("r3");
  const r4 = document.getElementById("r4");
  const r5 = document.getElementById("r5");
  const r6 = document.getElementById("r6");
  const r7 = document.getElementById("r7");
  const r8 = document.getElementById("r8");
  const r9 = document.getElementById("r9");
  const r10 = document.getElementById("r10");
  const r11 = document.getElementById("r11");
  const r12 = document.getElementById("r12");
  const r13 = document.getElementById("r13");
  const r14 = document.getElementById("r14");
  const r15 = document.getElementById("r15");
  const r16 = document.getElementById("r16");
  const r17 = document.getElementById("r17");
  const r18 = document.getElementById("r18");
  const r19 = document.getElementById("r19");
  const r20 = document.getElementById("r20");
  const r21 = document.getElementById("r21");
  const r22 = document.getElementById("r22");
  const r23 = document.getElementById("r23");
  const r24 = document.getElementById("r24");
  const r25 = document.getElementById("r25");
  const r26 = document.getElementById("r26");
  const r27 = document.getElementById("r27");
  const r28 = document.getElementById("r28");
  const r29 = document.getElementById("r29");
  const r30 = document.getElementById("r30");
  const r31 = document.getElementById("r31");
  const r32 = document.getElementById("r32");
  const r33 = document.getElementById("r33");
  const r34 = document.getElementById("r34");
  const r35 = document.getElementById("r35");
  const r36 = document.getElementById("r36");
  const r37 = document.getElementById("r37");
  const r38 = document.getElementById("r38");
  const r39 = document.getElementById("r39");
  const randomButton = document.querySelector(".gen1");
  const randomButton2 = document.querySelector(".gen2");
 r1.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/waifu";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r2.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/neko";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r3.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/shinobu";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 
 r4.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/megumin";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r5.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/bully";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 
 r6.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/cuddle";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r7.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/cry";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r8.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/hug";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r9.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/awoo";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r10.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/kiss";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r11.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/lick";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r12.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/pat";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r13.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/smug";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r14.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/bonk";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r15.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/yeet";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 
 r16.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/blush";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r17.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/smile";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r18.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/wave";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r19.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/highfive";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r20.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/handhold";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r21.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/nom";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r22.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/bite";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r23.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/glomp";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r24.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/slap";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r25.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/kill";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r26.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/kick";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r27.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/happy";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r28.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/wink";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r29.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/poke";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r30.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/dance";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r31.onclick = () => {
       karakter = "https://api.waifu.pics/sfw/cringe";
   randomButton.style.display = "block";
   randomButton2.style.display = "none";
 };
 r32.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search"
      },
    url:"https://api.waifu.im/search"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 r33.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=waifu"
      },
    url:"https://api.waifu.im/search?included_tags=waifu"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 r34.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=marin-kitagawa"
      },
    url:"https://api.waifu.im/search?included_tags=marin-kitagawa"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 r35.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=mori-calliope"
      },
    url:"https://api.waifu.im/search?included_tags=mori-calliope"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 r36.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=raiden-shogun"
      },
    url:"https://api.waifu.im/search?included_tags=raiden-shogun"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 r37.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=oppai"
      },
    url:"https://api.waifu.im/search?included_tags=oppai"
    }
  ]
};
randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
r38.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=selfies"
      },
    url:"https://api.waifu.im/search?included_tags=selfies"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 r39.onclick = () => {
       karakter = {
  images: [
    {
      artist: {
      name:"https://api.waifu.im/search?included_tags=uniform"
      },
    url:"https://api.waifu.im/search?included_tags=uniform"
    }
  ]
};
   randomButton.style.display = "none";
   randomButton2.style.display = "block";
 };
 
   async function gen1Clik(){
      loading.style.display = "block";
      welcome.style.display = "none";
      url.style.display = "none";
      document.body.style.backgroundImage = "none";
      save.style.display = "none";
      gMendukung.style.display = "block";
      authorName.style.display = "none";
      const inner = document.querySelector(".dimensi");
      inner.style.display = "none";
      const klik = document.getElementById("screenshot");
      const atropos = document.querySelector(".atropos");
      const response = await fetch(karakter);
      const photo = await response.json();
      setTimeout(function(){
        url.src = photo.url;
      document.body.style.backgroundImage = "url('" + photo.url + "')";
      loading.style.display = "none";
      atropos.style.display = "block";
      inner.style.display = "block";
      url.style.display = "block";
      save.style.display = "block";
      
      
     screenshot.addEventListener("click", function() {
       klik.href = photo.url;
       klik.download = "image.jpg";
     });
     }, 1500);
     }
    
    async function gen2Clik(){
      loading.style.display = "block";
      welcome.style.display = "none";
      url.style.display = "none";
      document.body.style.backgroundImage = "none";
      save.style.display = "none";
      const inner = document.querySelector(".dimensi");
      inner.style.display = "none";
      gMendukung.style.display = "none";
      authorName.style.display = "block";
      const klik = document.getElementById("screenshot");
      const nama = document.getElementById("authorName");
      const atropos = document.querySelector(".atropos");
      
      const response = await fetch(karakter.images[0].url);
      const photo = await response.json();
      setTimeout(function(){
      url.src = photo.images[0].url;
      document.body.style.backgroundImage = "url('" + photo.images[0].url + "')";
      loading.style.display = "none";
      atropos.style.display = "block";
      inner.style.display = "block";
      url.style.display = "block";
      save.style.display = "block";
      
      if(photo.images[0].artist !== null){
        nama.style.display = "block";
        nama.style.color = "white";
        nama.textContent = photo.images[0].artist.name;
      }
      else{
        nama.style.color = "red";
        nama.textContent = "Author Tidak Diketahui";
      }
     klik.addEventListener("click", function() {
       klik.href = photo.images[0].url;
       klik.download = "image.jpg";
     });
     }, 1500);
     }
     
    function haha(){
       location.reload(true);
      }
      
      const myAtropos = Atropos({
    el: '.my-atropos',
  });
  
  const d = new Date();
  const hours = d.getHours();
  var aisatsu = document.querySelector(".bx");

if (hours < 12) {
  var ohayo = document.getElementById("pagi");
  ohayo.play();
    aisatsu.classList.toggle("bx-cloud");
} else if(hours < 18){
  var konichiwa = document.getElementById("siang");
  konichiwa.play();
    aisatsu.classList.toggle("bx-sun");
}
else if(hours < 24){
  var konbanwa = document.getElementById("malem");
  konbanwa.play();
  aisatsu.classList.toggle("bx-moon");
}