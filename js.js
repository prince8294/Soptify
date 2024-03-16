console.log("welcome to my website");
let songIndex =0;

let audioElement = new Audio('_Do Lafzo Mein _Full Song__ Dhaai Akshar Prem Ke Ft Aishwarya Rai, Abhishek Bacchan.mp3');
let masterPlay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogerssBar');
let musigif =document.getElementById('gif');

let songs =[
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
    {songsName:"Do Lafzo mein", filePath: "C:\Users\pk245\Videos\olny music", coverpath: "Barsaat Ke Mausam Mein _ Naajayaz _ Naseeruddin Shah _ Kumar Sanu _ Roop Kumar Rathod"},
]

 
// hadel play pause click'

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
        musigif.style.opacity =1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');
        musigif.style.opacity =0;
    }
});
// 
// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    Progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = Progress;
});
myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

