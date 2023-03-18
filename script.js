console.log("Welcome to Spotify");
//Initializing variables
let index=0;
let audioElement = new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar')
let gif= document.getElementById('gif')
let masterSongName= document.getElementById('masterSongName')
let songname= document.getElementsByClassName('songname')
let songItem=Array.from(document.getElementsByClassName('songItem'))
let songs=[
    {songName: "Apna Bana Le Piya" , filepath:"1.mp3", coverPath:"0.jpg"},
    {songName: "Kabira" , filepath:"2.mp3", coverPath:"1.jpg"},
    {songName: "Ae Dil Hai Muskil" , filepath:"3.mp3", coverPath:"2.jpg"},
    {songName: "Agar Tum Sath Ho" , filepath:"4.mp3", coverPath:"3.jpg"},
    {songName: "Humraah" , filepath:"5.mp3", coverPath:"4.jpg"},
    {songName: "Mast Magan" , filepath:"6.mp3", coverPath:"5.jpg"},
    {songName: "Tu Har Lamha" , filepath:"7.mp3", coverPath:"6.jpg"},
    {songName: "Tujhe Kitna Chahne Lage" , filepath:"8.mp3", coverPath:"7.jpg"},
]

songItem.forEach((element,i) => {
    //console.log(element,i)
    element.getElementsByTagName("img"[0].src= songs[i].coverPath);
    element.getElementsByClassName("songname"[0].innerText= songs[i].songName);
    
    
});


//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
//console.log('timeupdate');
//update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//console.log(progress);
myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;  //to change progress bar value from percentage to value again
})

 const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
    })

 }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        //console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.add('fa-pause-circle');}
        else{
        audioElement.pause();
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }

        
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=7){
        index=0

    }
    else{
        index+=1;
    }
    audioElement.src=`song/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=7

    }
    else{
        index-=1;
    }
    audioElement.src=`song/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})
