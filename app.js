const song = [

 {  Name: "Golden", 
    Artist: "Harry Styles",
    Key: "E sharp minor",
    BPM: "140",
    Writers: ['1','2','3','4']
 },

 {
    Name: "Style",
    Artist: "Taylor Swift",
    Key: "D sharp major",
    BPM: "95",
    Writers: ['1','2','3']
 },
 
 {
    Name: "deja vu",
    Artist: "Olivia Rodrigo",
    Key: "A sharp major",
    BPM: "181",
    Writers: ['1','2']
 },

 {
   Name: "Bags",
   Artist: "Clairo",
   Key: "C sharp major",
   BPM: "105",
   Writers: ['1']

 },

];

//const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//numbers.forEach((song, index)=> console.log(song, index))

/* song.forEach((song)=> console.log(song.Name));
song.forEach((song)=> console.log(song.Artist));
song.forEach((song)=> console.log(song.Key));
song.forEach((song)=> console.log(song.BPM)); 
 */
 const BPM = song.filter((song) => song.BPM>120);
 console.log(BPM); 
BPM.forEach((song)=> console.log(song.BPM));

song.forEach((song)=> {
song.Writers.forEach((anything)=> {
   console.log(anything)
})})


// const numbers is bc index starts at 0
// arrow function ()=> auto returns output, keyword points global
// forEach is a loop 

//const graduated = students.filter((student) => student.graduated);
//console.log(graduated);

